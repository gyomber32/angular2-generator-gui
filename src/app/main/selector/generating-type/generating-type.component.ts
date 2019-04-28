import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OneTimeGenerationDialog } from './schedule-dialog/one-time-generation-dialog.component';
import { ScheduledGenerationDialog } from './schedule-dialog/scheduled-generation-dialog.component';

@Component({
  selector: 'app-generating-type',
  templateUrl: './generating-type.component.html',
  styleUrls: ['./generating-type.component.css']
})
export class GeneratingTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
  private selectedRestEndpoints = new Array<String>();
  private visibility = false;
  private selectedType: string;
  private dateTime: string;

  public selectType(event: any): void {
    this.selectedType = event.value;

    if (this.selectedType === 'Ütemezett adatgenerálás') {
      const dialogRef = this.dialog.open(ScheduledGenerationDialog);

      dialogRef.afterClosed().subscribe((result: string) => {
        console.log('The Scheduled Generation Dialog was closed');
        this.dateTime = result;
      });
    }
    if (this.selectedType === 'Egyszeri adatgenerálás') {
      const dialogRef = this.dialog.open(OneTimeGenerationDialog);

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The One Time Generation Dialog was closed');
        console.log(result);
        this.dateTime = result;
      });
    }
  }

  public setRestEnpoints(event: any): void {
    if (!this.selectedRestEndpoints.includes(event.source.value)) {
      this.selectedRestEndpoints.push(event.source.value);
    } else {
      const index = this.selectedRestEndpoints.indexOf(event.source.value);
      this.selectedRestEndpoints.splice(index, 1);
    }
  }

  ngOnInit() { }

}
