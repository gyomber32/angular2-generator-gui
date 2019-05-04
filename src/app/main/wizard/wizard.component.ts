import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';

import { CommonService } from '../../services/common.service';
import { WebsocketService } from '../../services/websocket.service';

import { Config } from '../../shared/config.interface';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit {

    isLinear = true;
    zeroFormGroup: FormGroup;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;
    sixthFormGroup: FormGroup;
    seventhFormGroup: FormGroup;
    eighthFormGroup: FormGroup;
    ninthFormGroup: FormGroup;

    rateControl: FormControl;

    public zeroChecked = false;
    public firstChecked = false;
    public secondChecked = false;
    public thirdChecked = false;
    public fourthChecked = false;
    public fifthChecked = false;
    public sixthChecked = false;
    public seventhChecked = false;
    public eighthChecked = false;
    public ninthChecked = false;

    public quantity: number;

    public gender: string;
    public age: number;
    public height: number;
    public weight: number;
    public systolicBloodPressure: number;
    public diastolicBloodPressure: number;
    public bloodGlucose: number;
    public bloodOxygen: number;
    public tobaccoUse: string;
    public lungSound: string;

    private patient: PatientInterface;

    @Output() patientEmitter = new EventEmitter<PatientInterface>();

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private commonService: CommonService,
        private websocketService: WebsocketService) { }

    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [{ value: this.gender, disabled: !(this.firstChecked) }, Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [
                { value: this.age, disabled: !(this.secondChecked) },
                Validators.compose([Validators.max(100), Validators.min(1), Validators.required])
            ]
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: [
                { value: this.height, disabled: !(this.thirdChecked) },
                Validators.compose([Validators.max(200), Validators.min(60), Validators.required])
            ]
        });
        this.fourthFormGroup = this.formBuilder.group({
            fourthCtrl: [
                { value: this.weight, disabled: !(this.fourthChecked) },
                Validators.compose([Validators.max(120), Validators.min(40), Validators.required])
            ]
        });
        this.fifthFormGroup = this.formBuilder.group({
            systolicCtrl: [
                { value: this.systolicBloodPressure, disabled: !(this.fifthChecked) },
                Validators.compose([Validators.max(220), Validators.min(40), Validators.required])
            ],
            diastolicCtrl: [
                { value: this.diastolicBloodPressure, disabled: !(this.fifthChecked) },
                Validators.compose([Validators.max(140), Validators.min(20), Validators.required])
            ]
        });
        this.sixthFormGroup = this.formBuilder.group({
            sixthCtrl: [
                { value: this.bloodGlucose, disabled: !(this.sixthChecked) },
                Validators.compose([Validators.max(380), Validators.min(50), Validators.required])
            ]
        });
        this.seventhFormGroup = this.formBuilder.group({
            seventhCtrl: [
                { value: this.bloodOxygen, disabled: !(this.seventhChecked) },
                Validators.compose([Validators.max(100), Validators.min(50), Validators.required])
            ]
        });
        this.eighthFormGroup = this.formBuilder.group({
            eighthCtrl: [
                { value: this.tobaccoUse, disabled: !(this.eighthChecked) },
                Validators.required
            ]
        });
        this.ninthFormGroup = this.formBuilder.group({
            ninthCtrl: [
                { value: this.lungSound, disabled: !(this.ninthChecked) },
                Validators.required]
        });
        this.zeroFormGroup = this.formBuilder.group({
            zeroCtrl: [
                '', Validators.compose([Validators.min(1), Validators.required])
            ]
        });
        this.websocketService.getFromServer();
    }

    public onChange(): void {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [{ value: this.gender, disabled: !(this.firstChecked) }, Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [
                { value: this.age, disabled: !(this.secondChecked) },
                Validators.compose([Validators.max(100), Validators.min(1), Validators.required])
            ]
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: [
                { value: this.height, disabled: !(this.thirdChecked) },
                Validators.compose([Validators.max(200), Validators.min(60), Validators.required])]
        });
        this.fourthFormGroup = this.formBuilder.group({
            fourthCtrl: [
                { value: this.weight, disabled: !(this.fourthChecked) },
                Validators.compose([Validators.max(120), Validators.min(40), Validators.required])]
        });
        this.fifthFormGroup = this.formBuilder.group({
            systolicCtrl: [
                { value: this.systolicBloodPressure, disabled: !(this.fifthChecked) },
                Validators.compose([Validators.max(220), Validators.min(40), Validators.required])],
            diastolicCtrl: [
                { value: this.diastolicBloodPressure, disabled: !(this.fifthChecked) },
                Validators.compose([Validators.max(140), Validators.min(20), Validators.required])]
        });
        this.sixthFormGroup = this.formBuilder.group({
            sixthCtrl: [
                { value: this.bloodGlucose, disabled: !(this.sixthChecked) },
                Validators.compose([Validators.max(20), Validators.min(2), Validators.required])]
        });
        this.seventhFormGroup = this.formBuilder.group({
            seventhCtrl: [
                { value: this.bloodOxygen, disabled: !(this.seventhChecked) },
                Validators.compose([Validators.max(100), Validators.min(50), Validators.required])]
        });
        this.eighthFormGroup = this.formBuilder.group({
            eighthCtrl: [{ value: this.tobaccoUse, disabled: !(this.eighthChecked) }, Validators.required]
        });
        this.ninthFormGroup = this.formBuilder.group({
            ninthCtrl: [{ value: this.lungSound, disabled: !(this.ninthChecked) }, Validators.required]
        });
        this.zeroFormGroup = this.formBuilder.group({
            zeroCtrl: ['', Validators.compose([Validators.min(1), Validators.required])]
        });

        if (this.firstChecked === false) {
            this.gender = undefined;
        }
        if (this.secondChecked === false) {
            this.age = undefined;
        }
        if (this.thirdChecked === false) {
            this.height = undefined;
        }
        if (this.fourthChecked === false) {
            this.weight = undefined;
        }
        if (this.fifthChecked === false) {
            this.systolicBloodPressure = undefined;
            this.diastolicBloodPressure = undefined;
        }
        if (this.sixthChecked === false) {
            this.bloodGlucose = undefined;
        }
        if (this.seventhChecked === false) {
            this.bloodOxygen = undefined;
        }
        if (this.eighthChecked === false) {
            this.tobaccoUse = undefined;
        }
        if (this.ninthChecked === false) {
            this.lungSound = undefined;
        }
    }

    public reset() {
        this.firstChecked = false;
        this.secondChecked = false;
        this.thirdChecked = false;
        this.fourthChecked = false;
        this.fifthChecked = false;
        this.sixthChecked = false;
        this.seventhChecked = false;
        this.eighthChecked = false;
        this.ninthChecked = false;

        this.gender = undefined;
        this.age = undefined;
        this.height = undefined;
        this.weight = undefined;
        this.systolicBloodPressure = undefined;
        this.diastolicBloodPressure = undefined;
        this.bloodGlucose = undefined;
        this.bloodOxygen = undefined;
        this.tobaccoUse = undefined;
        this.lungSound = undefined;
    }

    async getData() {
        this.commonService.updateAge(this.age);
        this.commonService.updateGender(this.gender);
        this.commonService.updateHeight(this.height);
        this.commonService.updateWeight(this.weight);
        this.commonService.updateSystolicBloodPressure(this.systolicBloodPressure);
        this.commonService.updateDiastolicBloodPressure(this.diastolicBloodPressure);
        this.commonService.updateBloodGlucose(this.bloodGlucose);
        this.commonService.updateBloodOxygen(this.bloodOxygen);
        this.commonService.updateTobaccoUse(this.tobaccoUse);
        this.commonService.updateLungSound(this.lungSound);
        this.commonService.updateQuantity(this.quantity);
        this.commonService.castConfig.subscribe((config: Config) => {
            this.websocketService.sendToServer(config);
        });

        if (this.commonService.getWatching() === true) {
            this.router.navigate(['/upload']);
        }
    }
}

export interface PatientInterface {
    gender?: string;
    age?: number;
    height?: number;
    weight?: number;
    bloodPressure?: string;
    bloodGlucose?: number;
    bloodOxygen?: number;
    tobaccoUse?: string;
    lungSound?: string;
}

export class Datepicker {
    startDate = new Date(1990, 0, 1);
    endDate = new Date(2018, 12, 31);
}
