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

    /* This is working and it's necessary, but not here, but also after wizard selected the appropriate SQL queries */

    /* if( this.uploadType.getSelectedType() == 'Nyomonkövetés' ){
      this.router.navigate(['/upload-table']);
    } */

    
    this.router.navigate(['/wizard']);

  }

  ngOnInit() {
  }

}
