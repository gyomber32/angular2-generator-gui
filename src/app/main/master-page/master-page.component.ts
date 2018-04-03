import { Component, OnInit } from '@angular/core';
import { UploadTypeComponent } from '../upload-type/upload-type.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})

export class MasterPageComponent implements OnInit {

  constructor(private uploadType: UploadTypeComponent, private router: Router) { }

  navigate(){
    if( this.uploadType.getSelectedType() == 'Nyomonkövetés' ){
      this.router.navigate(['/upload-table']);
    }
  }

  ngOnInit() {
  }

}
