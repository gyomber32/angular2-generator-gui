import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-upload-type',
  templateUrl: './upload-type.component.html',
  styleUrls: ['./upload-type.component.css']
})

export class UploadTypeComponent implements OnInit {

  constructor() { }

  private uploads = ['Mentés fájlba','Nyomonkövetés'];
  private visibility: boolean = false;

  private selectedType: string;

  public getSelectedType(){
    console.log("Selected type is: " + this.selectedType);
    return this.selectedType;
  }

  public show(){
    if(this.selectedType == 'Mentés fájlba'){
      this.visibility = true;
    }else{
      this.visibility = false
    }
  }

  ngOnInit() {
  }

}
