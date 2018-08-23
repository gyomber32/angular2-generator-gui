import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this.formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this.formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this.formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this.formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this.formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });
  }
}

export class Datepicker {
  startDate = new Date(1990, 0, 1);
  endDate = new Date (2018, 12, 31);
}
