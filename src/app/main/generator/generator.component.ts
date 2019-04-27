import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})

export class GeneratorComponent implements OnInit {

    patient: any;

    constructor(private router: Router) { }

    patientEmitter($event) {
        this.patient = $event;
    }

    navigate() {

        /* This is working and it's necessary, but not here, but also after wizard selected the appropriate SQL queries */

        /* if( this.uploadType.getSelectedType() == 'Nyomonkövetés' ){
          this.router.navigate(['/upload-table']);
        } */

        this.router.navigate(['/wizard']);

    }

    ngOnInit() { }

}
