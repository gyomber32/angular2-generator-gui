import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../../services/common.service';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-upload-type',
  templateUrl: './upload-type.component.html',
  styleUrls: ['./upload-type.component.scss']
})

export class UploadTypeComponent implements OnInit {

  public saveToFile = false;
  public watching = false;

  constructor(private commonService: CommonService) { }

  public setSaveToFile(event: MatCheckboxChange): void {
    this.saveToFile = event.checked;
    this.commonService.updateSaveToFile(this.saveToFile);
  }

  public setWatching(event: MatCheckboxChange): void {
    this.watching = event.checked;
    this.commonService.updateWatching(this.watching);
  }

  ngOnInit() { }

}
