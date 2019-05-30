import { Component, OnInit } from '@angular/core';
import { MatDialog, MatRadioChange, MatCheckboxChange } from '@angular/material';
import { ScheduledGenerationDialog } from './schedule-dialog/scheduled-generation-dialog.component';

import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-generating-type',
  templateUrl: './generating-type.component.html',
  styleUrls: ['./generating-type.component.scss']
})
export class GeneratingTypeComponent implements OnInit {

  constructor(public dialog: MatDialog, private commonService: CommonService) { }

  private selectedRestEndpoints = new Array<string>();
  private dateAndTime: number[];
  public typeOfGenerating: string;
  public restEndpoints = [
    {
      name: 'endPoint1',
      url: 'http://localhost:8000/postPatient1'
    },
    {
      name: 'endPoint2',
      url: 'http://localhost:8000/postPatient2'
    },
    {
      name: 'endPoint3',
      url: 'http://localhost:8000/postPatient3'
    }
  ];

  public selectType(event: MatRadioChange): void {
    this.typeOfGenerating = event.value;
    if (this.typeOfGenerating === 'Ütemezett adatgenerálás') {
      const dialogRef = this.dialog.open(ScheduledGenerationDialog);

      dialogRef.afterClosed().subscribe((result: number[]) => {
        this.dateAndTime = null;
        this.dateAndTime = result;
        this.commonService.updateTypeOfGenerating(this.typeOfGenerating);
        this.commonService.updateDateAndTime(this.dateAndTime);
      });
    }
    if (this.typeOfGenerating === 'Egyszeri adatgenerálás') {
      this.dateAndTime = null;
      this.commonService.updateDateAndTime(this.dateAndTime);
      this.commonService.updateTypeOfGenerating(this.typeOfGenerating);
    }

  }

  public setRestEnpoints(event: MatCheckboxChange): void {
    if (!this.selectedRestEndpoints.includes(event.source.value)) {
      this.selectedRestEndpoints.push(event.source.value);
    } else {
      const index = this.selectedRestEndpoints.indexOf(event.source.value);
      this.selectedRestEndpoints.splice(index, 1);
    }
    this.commonService.updateEndPoints(this.selectedRestEndpoints);
  }

  ngOnInit() { }

}
