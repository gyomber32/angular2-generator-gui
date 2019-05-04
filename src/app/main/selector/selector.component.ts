import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.css']
})

export class SelectorComponent implements OnInit {

    constructor(private router: Router, private commonService: CommonService) { }

    public navigate() {

        const typeOfGenerating = this.commonService.getTypeOfGenerating();
        const endPoints = this.commonService.getEndPoints();

        if (typeOfGenerating === null) {
            alert('Továbblépés előtt, kérem állítson be generálási típust!');
        }
        if (endPoints.length === 0) {
            alert('Továbblépés előtt, kérem állítson be legalább egy végpontot!');
        }
        if (typeOfGenerating !== null && endPoints.length !== 0) {
            this.router.navigate(['/wizard']);
        }
    }

    ngOnInit() { }

}
