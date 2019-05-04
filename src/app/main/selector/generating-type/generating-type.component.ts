import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ScheduledGenerationDialog } from './schedule-dialog/scheduled-generation-dialog.component';

import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-generating-type',
  templateUrl: './generating-type.component.html',
  styleUrls: ['./generating-type.component.css']
})
export class GeneratingTypeComponent implements OnInit {

  constructor(public dialog: MatDialog, private commonService: CommonService) { }

  private restEndpoints = [
    {
      name: 'endPoint1',
      url: 'http://endPoint1'
    },
    {
      name: 'endPoint2',
      url: 'http://endPoint2'
    },
    {
      name: 'endPoint3',
      url: 'http://endPoint3'
    }
  ];

  private selectedRestEndpoints = new Array<string>();
  private visibility = false;
  private typeOfGenerating: string;
  private dateAndTime: string;

  public selectType(event: any): void {
    this.typeOfGenerating = event.value;
    console.log(this.typeOfGenerating);
    if (this.typeOfGenerating === 'Ütemezett adatgenerálás') {
      const dialogRef = this.dialog.open(ScheduledGenerationDialog);

      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('The Scheduled Generation Dialog was closed');
        console.log(result);
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

  public setRestEnpoints(event: any): void {
    if (!this.selectedRestEndpoints.includes(event.source.value)) {
      this.selectedRestEndpoints.push(event.source.value);
      this.commonService.updateEndPoints(this.selectedRestEndpoints);
    } else {
      const index = this.selectedRestEndpoints.indexOf(event.source.value);
      this.selectedRestEndpoints.splice(index, 1);
      this.commonService.updateEndPoints(this.selectedRestEndpoints);
    }
  }

  ngOnInit() { }

}
