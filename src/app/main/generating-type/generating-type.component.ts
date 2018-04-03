import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generating-type',
  templateUrl: './generating-type.component.html',
  styleUrls: ['./generating-type.component.css']
})
export class GeneratingTypeComponent implements OnInit {

  constructor() { }

  private visibility: boolean = false;

  private selectedType: string;

  types = [
    'Egyszeri adatgenerálás',
    'Ütemezett adatgenerálás'
  ];

  show(){
    if(this.selectedType == 'Ütemezett adatgenerálás'){
      this.visibility = true;
    }else{
      this.visibility = false;
    }
  }

  ngOnInit() {
  }

}
