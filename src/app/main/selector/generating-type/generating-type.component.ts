import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generating-type',
  templateUrl: './generating-type.component.html',
  styleUrls: ['./generating-type.component.css']
})
export class GeneratingTypeComponent implements OnInit {

  constructor() { }

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

  public selectType(event: any): void {
    this.selectedType = event.value;
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
