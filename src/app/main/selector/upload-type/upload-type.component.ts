import { Component, OnInit, Injectable } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-upload-type',
  templateUrl: './upload-type.component.html',
  styleUrls: ['./upload-type.component.css']
})

export class UploadTypeComponent implements OnInit {

  constructor() { }

  private visibility = false;

  public show() {
    this.visibility = !this.visibility;
  }

  ngOnInit() { }

}
