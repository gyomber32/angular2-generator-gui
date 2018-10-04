import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval } from "rxjs";

/* Services */
import { GenderService } from '../../utils/gender.service';
import { AgeService } from '../../utils/age.service';
import { HeightService } from '../../utils/height.service';
import { WeightService } from '../../utils/weight.service';
import { SystolicBloodPressureService } from '../../utils/systolic-blood-pressure.service';
import { DiastolicBloodPressureService } from '../../utils/diastolic-blood-pressure.service';
import { BloodGlucoseService } from '../../utils/blood-glucose.service';
import { BloodOxygenService } from '../../utils/blood-oxygen.service';
import { TobaccoUseService } from '../../utils/tobacco-use.service';
import { LeftLowerLungService } from '../../utils/left-lower-lung.service';
import { LeftUpperLungService } from '../../utils/left-upper-lung.service';
import { RightLowerLungService } from '../../utils/right-lower-lung.service';
import { RightUpperLungService } from '../../utils/right-upper-lung.service';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css'],
    providers: [GenderService]
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

    private firstChecked = false;
    private secondChecked = false;
    private thirdChecked = false;
    private fourthChecked = false;
    private fifthChecked = false;
    private sixthChecked = false;
    private seventhChecked = false;
    private eighthChecked = false;
    private ninthChecked = false;

    private quantity: number = 5;

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

    private patient: PatientInterface[];

    constructor(private formBuilder: FormBuilder, private genderService: GenderService, private ageService: AgeService, private heightService: HeightService, private weightService: WeightService, private systolicBloodPressureService: SystolicBloodPressureService, private diastolicBloodPressureService: DiastolicBloodPressureService, private bloodGlucoseService: BloodGlucoseService, private bloodOxygenService: BloodOxygenService, private tobaccoUseService: TobaccoUseService, private leftLowerLungService: LeftLowerLungService, private leftUpperLungService: LeftUpperLungService, private rightLowerLungService: RightLowerLungService, private rightUpperLungService: RightUpperLungService) { }

    ngOnInit() {
        console.log("onInit called");
        this.zeroFormGroup = this.formBuilder.group({
            zeroCtrl: ['', Validators.required]
        });
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
        console.log("quantity: " + this.quantity);
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

        this.zeroFormGroup = this.formBuilder.group({
            zeroCtrl: ['', Validators.required]
        });
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

        if (this.firstChecked == false) {
            this.gender = undefined;
        }
        if (this.secondChecked == false) {
            this.age = undefined;
        }
        if (this.thirdChecked == false) {
            this.height = undefined;
        }
        if (this.fourthChecked == false) {
            this.weight = undefined;
        }
        if (this.fifthChecked == false) {
            this.systolicBloodPressure = undefined;
            this.diastolicBloodPressure = undefined;
        }
        if (this.sixthChecked == false) {
            this.bloodGlucose = undefined;
        }
        if (this.seventhChecked == false) {
            this.bloodOxygen = undefined;
        }
        if (this.eighthChecked == false) {
            this.tobaccoUse = undefined;
        }
        if (this.ninthChecked == false) {
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

        console.log("Variables reseted");
    }

    /*public generate() {
        console.log("A generálás elindult!");
        if (this.gender != undefined) {
            this.genderService.getGender(this.gender).subscribe((data) => {
                console.log("The gender is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.age != undefined) {
            this.ageService.getAge(this.age).subscribe((data) => {
                console.log("The age is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.height != undefined) {
            this.heightService.getHeight(this.height).subscribe((data) => {
                console.log("The height is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.weight != undefined) {
            this.weightService.getWeight(this.weight).subscribe((data) => {
                console.log("The weight is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.systolicBloodPressure != undefined && this.diastolicBloodPressure != undefined) {
            this.systolicBloodPressureService.getSystolicBloodPressure(this.systolicBloodPressure).subscribe((data) => {
                console.log("The systolic is: ", data);
                this.diastolicBloodPressureService.getDiastolicBloodPressure(this.diastolicBloodPressure).subscribe((data) => {
                    console.log("The diastolic is:", data);
                }, (error) => {
                    console.log(error);
                });
            }, (error) => {
                console.log(error);
            });
        }
        if (this.bloodGlucose != undefined) {
            this.bloodGlucoseService.getBloodGlucose(this.bloodGlucose).subscribe((data) => {
                console.log("The bloodglucose is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.bloodOxygen != undefined) {
            this.bloodOxygenService.getBloodOxygen(this.bloodOxygen).subscribe((data) => {
                console.log("The bloodOxygen is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.tobaccoUse != undefined) {
            this.tobaccoUseService.getTobaccoUse(this.tobaccoUse).subscribe((data) => {
                console.log("The tobaccoUse is: ", data);
            }, (error) => {
                console.log(error);
            });
        }
        if (this.lungSound != undefined) {
            this.leftLowerLungService.getLeftLowerLung(this.lungSound).subscribe((data) => {
                console.log("1. The leftLowerLungSound is: ", data);
                this.leftUpperLungService.getLeftUpperLung(this.lungSound).subscribe((data) => {
                    console.log("2. The leftUpperLungSound is: ", data);
                    this.rightLowerLungService.getRightLowerLung(this.lungSound).subscribe((data) => {
                        console.log("3. The rigthLowerLungSound is: ", data);
                        this.rightUpperLungService.getRightUpperLung(this.lungSound).subscribe((data) => {
                            console.log("4. The rigthUpperLungSound is: ", data);
                        }, (error) => {
                            console.log(error);
                        });
                    }, (error) => {
                        console.log(error);
                    });
                }, (error) => {
                    console.log(error);
                });
            }, (error) => {
                console.log(error);
            });
        }
    }*/

    getGender() {
        return this.genderService.getGender(this.gender).toPromise().then((data) => {
            console.log("The gender is: ", data);
            //this.patient.push(data[0].gender);
        }, (error) => {
            console.log(error);
        });
    }

    getAge() {
        return this.ageService.getAge(this.age).toPromise().then((data) => {
            console.log("The age is: ", data);
            //this.patient.age = data[0].age;
        }, (error) => {
            console.log(error);
        });
    }

    getHeight() {
        return this.heightService.getHeight(this.height).toPromise().then((data) => {
            console.log("The height is: ", data);
            //this.patient.height = data[0].height;
        }, (error) => {
            console.log(error);
        });
    }

    getWeight() {
        return this.weightService.getWeight(this.weight).toPromise().then((data) => {
            console.log("The weight is: ", data);
            //this.patient.weight = data[0].weight;
        }, (error) => {
            console.log(error);
        });
    }

    getSystolicBloodPressure() {
        let systolic = '';
        return this.systolicBloodPressureService.getSystolicBloodPressure(this.systolicBloodPressure).toPromise().then((data) => {
            console.log("The systolic is: ", data);
            systolic = data[0].systolic;
        }, (error) => {
            console.log(error);
        });
    }

    getDiastolicBloodPressure() {
        let diastolic = '';
        return this.diastolicBloodPressureService.getDiastolicBloodPressure(this.diastolicBloodPressure).toPromise().then((data) => {
            console.log("The diastolic is:", data);
            diastolic = data[0].diastolic;
            //this.patient.bloodPressure = (systolic + '/' + diastolic);
        }, (error) => {
            console.log(error);
        });
    }

    getGlucose() {
        return this.bloodGlucoseService.getBloodGlucose(this.bloodGlucose).toPromise().then((data) => {
            console.log("The bloodglucose is: ", data);
            //this.patient.bloodGlucose = data[0].bloodglucose;
        }, (error) => {
            console.log(error);
        });
    }

    getBloodOxygen() {
        return this.bloodOxygenService.getBloodOxygen(this.bloodOxygen).toPromise().then((data) => {
            console.log("The bloodOxygen is: ", data);
            //this.patient.bloodOxygen = data[0].bloodOxygen;
        }, (error) => {
            console.log(error);
        });
    }

    getTobaccoUse() {
        return this.tobaccoUseService.getTobaccoUse(this.tobaccoUse).toPromise().then((data) => {
            console.log("The tobaccoUse is: ", data);
            //this.patient.tobaccoUse = data[0].tobaccoUse;
        }, (error) => {
            console.log(error);
        });
    }

    getLeftLowerLung() {
        let lll = '';
        return this.leftLowerLungService.getLeftLowerLung(this.lungSound).toPromise().then((data) => {
            console.log("1. The leftLowerLungSound is: ", data);
            lll = data[0].lll;
        }, (error) => {
            console.log(error);
        });
        //this.patient.lungSound = (lll + '/' + lul + '/' + rll + '/' + rul);
    }

    getLeftUpperLung() {
        let lul = '';
        return this.leftUpperLungService.getLeftUpperLung(this.lungSound).toPromise().then((data) => {
            console.log("2. The leftUpperLungSound is: ", data);
            lul = data[0].lul;
        }, (error) => {
            console.log(error);
        });
    }

    getRightLowerLung() {
        let rll = '';
        return this.rightLowerLungService.getRightLowerLung(this.lungSound).toPromise().then((data) => {
            console.log("3. The rigthLowerLungSound is: ", data);
            rll = data[0].rll;
        }, (error) => {
            console.log(error);
        });
    }

    getRightUpperLung() {
        let rul = '';
        return this.rightUpperLungService.getRightUpperLung(this.lungSound).toPromise().then((data) => {
            console.log("4. The rigthUpperLungSound is: ", data);
            rul = data[0].rul;
        }, (error) => {
            console.log(error);
        });
    }

    async getData() {
        for (let i = 1; i <= this.quantity; i++) {

            if (this.firstChecked == true) {
                await this.getGender();
            }
            if (this.secondChecked == true) {
                await this.getAge();
            }
            if (this.thirdChecked == true) {
                await this.getHeight();
            }
            if (this.fourthChecked == true) {
                await this.getWeight();
            }
            if (this.fifthChecked == true) {
                await this.getSystolicBloodPressure();
                await this.getDiastolicBloodPressure();
            }
            if (this.sixthChecked == true) {
                await this.getGlucose();
            }
            if (this.seventhChecked == true) {
                await this.getBloodOxygen();
            }
            if (this.eighthChecked == true) {
                await this.getTobaccoUse();
            }
            if (this.ninthChecked == true) {
                await this.getLeftLowerLung();
                await this.getLeftUpperLung();
                await this.getRightLowerLung();
                await this.getRightUpperLung();
            }
            console.log(i + " generálás készen van.");
            //console.log(this.patient);
        }
        console.log("GENERÁLÁS VÉGE!!!");
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
