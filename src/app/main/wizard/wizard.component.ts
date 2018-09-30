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

    private firstChecked = false;
    private secondChecked = false;
    private thirdChecked = false;
    private fourthChecked = false;
    private fifthChecked = false;
    private sixthChecked = false;
    private seventhChecked = false;
    private eighthChecked = false;
    private ninthChecked = false;

    private gender: string;
    private age: number;
    private height: number;
    private weight: number;
    private systolicBloodPressure: number;
    private diastolicBloodPressure: number;
    private bloodGlucose: number;
    private bloodOxygen: number;
    private tobaccoUse: string;
    private lungSound: string;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        console.log("onInit called");
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [{ value: this.gender, disabled: !(this.firstChecked) }, Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [{ value: this.age, disabled: !(this.secondChecked) }, Validators.required]
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: [{ value: this.height, disabled: !(this.thirdChecked) }, Validators.required]
        });
        this.fourthFormGroup = this.formBuilder.group({
            fourthCtrl: [{ value: this.weight, disabled: !(this.fourthChecked) }, Validators.required]
        });
        this.fifthFormGroup = this.formBuilder.group({
            systolicCtrl: [{ value: this.systolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.required],
            diastolicCtrl: [{ value: this.diastolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.required]
        });
        this.sixthFormGroup = this.formBuilder.group({
            sixthCtrl: [{ value: this.bloodGlucose, disabled: !(this.sixthChecked) }, Validators.required]
        });
        this.seventhFormGroup = this.formBuilder.group({
            seventhCtrl: [{ value: this.bloodOxygen, disabled: !(this.seventhChecked) }, Validators.required]
        });
        this.eighthFormGroup = this.formBuilder.group({
            eighthCtrl: [{ value: this.tobaccoUse, disabled: !(this.eighthChecked) }, Validators.required]
        });
        this.ninthFormGroup = this.formBuilder.group({
            ninthCtrl: [{ value: this.lungSound, disabled: !(this.ninthChecked) }, Validators.required]
        });
    }

    public onChange() {
        console.log("******************");
        console.log("gender: " + this.gender);
        console.log("age: " + this.age);
        console.log("height: " + this.height);
        console.log("weight: " + this.weight);
        console.log("vérnyomás: " + this.systolicBloodPressure + "/" + this.diastolicBloodPressure);
        console.log("vércukor: " + this.bloodGlucose);
        console.log("véroxigén: " + this.bloodOxygen);
        console.log("tobaccoUse: " + this.tobaccoUse);
        console.log("tüdőhang: " + this.lungSound);
        console.log("******************");

        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [{ value: this.gender, disabled: !(this.firstChecked) }, Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [{ value: this.age, disabled: !(this.secondChecked) }, Validators.required]
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: [{ value: this.height, disabled: !(this.thirdChecked) }, Validators.required]
        });
        this.fourthFormGroup = this.formBuilder.group({
            fourthCtrl: [{ value: this.weight, disabled: !(this.fourthChecked) }, Validators.required]
        });
        this.fifthFormGroup = this.formBuilder.group({
            systolicCtrl: [{ value: this.systolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.required],
            diastolicCtrl: [{ value: this.diastolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.required]
        });
        this.sixthFormGroup = this.formBuilder.group({
            sixthCtrl: [{ value: this.bloodGlucose, disabled: !(this.sixthChecked) }, Validators.required]
        });
        this.seventhFormGroup = this.formBuilder.group({
            seventhCtrl: [{ value: this.bloodOxygen, disabled: !(this.seventhChecked) }, Validators.required]
        });
        this.eighthFormGroup = this.formBuilder.group({
            eighthCtrl: [{ value: this.tobaccoUse, disabled: !(this.eighthChecked) }, Validators.required]
        });
        this.ninthFormGroup = this.formBuilder.group({
            ninthCtrl: [{ value: this.lungSound, disabled: !(this.ninthChecked) }, Validators.required]
        });

        if(this.firstChecked == false){
            this.gender = '';
        }
        if(this.secondChecked == false){
            this.age = null; 
        }
        if(this.thirdChecked == false){
            this.height = null;
        }
        if(this.fourthChecked == false){
            this.weight = null;
        }
        if(this.fifthChecked == false){
            this.systolicBloodPressure = null;
            this.diastolicBloodPressure = null;
        }
        if(this.sixthChecked == false){
            this.bloodGlucose = null;
        }
        if(this.seventhChecked == false){
            this.bloodOxygen = null;
        }
        if(this.eighthChecked == false){
            this.tobaccoUse = '';
        }
        if(this.ninthChecked == false){
            this.lungSound = '';
        }
    }

    public generate(){
        
    }
}

export class Datepicker {
    startDate = new Date(1990, 0, 1);
    endDate = new Date(2018, 12, 31);
}
