import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.css']
})

export class SelectorComponent implements OnInit {

    constructor(private router: Router) { }

    navigate() {

        /* This is working and it's necessary, but not here, but also after wizard selected the appropriate SQL queries */

        /* if( this.uploadType.getSelectedType() == 'Nyomonkövetés' ){
          this.router.navigate(['/upload-table']);
        } */

        this.router.navigate(['/generator']);

    }

    ngOnInit() { }

}
