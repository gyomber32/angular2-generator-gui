import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

/* Services */
import { GenderService } from '../../../utils/gender.service';
import { AgeService } from '../../../utils/age.service';
import { HeightService } from '../../../utils/height.service';
import { WeightService } from '../../../utils/weight.service';
import { SystolicBloodPressureService } from '../../../utils/systolic-blood-pressure.service';
import { DiastolicBloodPressureService } from '../../../utils/diastolic-blood-pressure.service';
import { BloodGlucoseService } from '../../../utils/blood-glucose.service';
import { BloodOxygenService } from '../../../utils/blood-oxygen.service';
import { TobaccoUseService } from '../../../utils/tobacco-use.service';
import { LeftLowerLungService } from '../../../utils/left-lower-lung.service';
import { LeftUpperLungService } from '../../../utils/left-upper-lung.service';
import { RightLowerLungService } from '../../../utils/right-lower-lung.service';
import { RightUpperLungService } from '../../../utils/right-upper-lung.service';

@Component({
    selector: 'wizard',
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

    rateControl: FormControl;

    private zeroChecked = false;
    private firstChecked = false;
    private secondChecked = false;
    private thirdChecked = false;
    private fourthChecked = false;
    private fifthChecked = false;
    private sixthChecked = false;
    private seventhChecked = false;
    private eighthChecked = false;
    private ninthChecked = false;

    private quantity: number;

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

    private genderTemp = new Array<string>();
    private ageTemp = new Array<number>();
    private heightTemp = new Array<number>();
    private weightTemp = new Array<number>();
    private BloodPressureTemp = new Array<string>();
    private bloodGlucoseTemp = new Array<number>();
    private bloodOxygenTemp = new Array<number>();
    private tobaccoUseTemp = new Array<string>();
    private lungSoundTemp = new Array<string>();

    private patient: PatientInterface;

    @Output() patientEmitter = new EventEmitter<PatientInterface>();

    constructor(private formBuilder: FormBuilder, private genderService: GenderService, private ageService: AgeService, private heightService: HeightService, private weightService: WeightService, private systolicBloodPressureService: SystolicBloodPressureService, private diastolicBloodPressureService: DiastolicBloodPressureService, private bloodGlucoseService: BloodGlucoseService, private bloodOxygenService: BloodOxygenService, private tobaccoUseService: TobaccoUseService, private leftLowerLungService: LeftLowerLungService, private leftUpperLungService: LeftUpperLungService, private rightLowerLungService: RightLowerLungService, private rightUpperLungService: RightUpperLungService) { }

    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [{ value: this.gender, disabled: !(this.firstChecked) }, Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [{ value: this.age, disabled: !(this.secondChecked) }, Validators.compose([Validators.max(100), Validators.min(1), Validators.required])]
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: [{ value: this.height, disabled: !(this.thirdChecked) }, Validators.compose([Validators.max(200), Validators.min(60), Validators.required])]
        });
        this.fourthFormGroup = this.formBuilder.group({
            fourthCtrl: [{ value: this.weight, disabled: !(this.fourthChecked) }, Validators.compose([Validators.max(120), Validators.min(40), Validators.required])]
        });
        this.fifthFormGroup = this.formBuilder.group({
            systolicCtrl: [{ value: this.systolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.compose([Validators.max(220), Validators.min(40), Validators.required])],
            diastolicCtrl: [{ value: this.diastolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.compose([Validators.max(140), Validators.min(20), Validators.required])]
        });
        this.sixthFormGroup = this.formBuilder.group({
            sixthCtrl: [{ value: this.bloodGlucose, disabled: !(this.sixthChecked) }, Validators.compose([Validators.max(380), Validators.min(50), Validators.required])]
        });
        this.seventhFormGroup = this.formBuilder.group({
            seventhCtrl: [{ value: this.bloodOxygen, disabled: !(this.seventhChecked) }, Validators.compose([Validators.max(100), Validators.min(50), Validators.required])]
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

        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: [{ value: this.gender, disabled: !(this.firstChecked) }, Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: [{ value: this.age, disabled: !(this.secondChecked) }, Validators.compose([Validators.max(100), Validators.min(1), Validators.required])]
        });
        this.thirdFormGroup = this.formBuilder.group({
            thirdCtrl: [{ value: this.height, disabled: !(this.thirdChecked) }, Validators.compose([Validators.max(200), Validators.min(60), Validators.required])]
        });
        this.fourthFormGroup = this.formBuilder.group({
            fourthCtrl: [{ value: this.weight, disabled: !(this.fourthChecked) }, Validators.compose([Validators.max(120), Validators.min(40), Validators.required])]
        });
        this.fifthFormGroup = this.formBuilder.group({
            systolicCtrl: [{ value: this.systolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.compose([Validators.max(220), Validators.min(40), Validators.required])],
            diastolicCtrl: [{ value: this.diastolicBloodPressure, disabled: !(this.fifthChecked) }, Validators.compose([Validators.max(140), Validators.min(20), Validators.required])]
        });
        this.sixthFormGroup = this.formBuilder.group({
            sixthCtrl: [{ value: this.bloodGlucose, disabled: !(this.sixthChecked) }, Validators.compose([Validators.max(20), Validators.min(2), Validators.required])]
        });
        this.seventhFormGroup = this.formBuilder.group({
            seventhCtrl: [{ value: this.bloodOxygen, disabled: !(this.seventhChecked) }, Validators.compose([Validators.max(100), Validators.min(50), Validators.required])]
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
    }

    getGender() {
        return this.genderService.getGender(this.quantity, this.gender).toPromise().then((data) => {
            console.log("The gender is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                if (data[i].gender == "F") {
                    this.genderTemp[i] = "Nő";
                } else {
                    this.genderTemp[i] = "Férfi";
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    getAge() {
        return this.ageService.getAge(this.quantity, this.age).toPromise().then((data) => {
            console.log("The age is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                this.ageTemp[i] = data[i].age;
            }
        }, (error) => {
            console.log(error);
        });
    }

    getHeight() {
        return this.heightService.getHeight(this.quantity, this.height).toPromise().then((data) => {
            console.log("The height is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                this.heightTemp[i] = data[i].valuenum;
            }
        }, (error) => {
            console.log(error);
        });
    }

    getWeight() {
        return this.weightService.getWeight(this.quantity, this.weight).toPromise().then((data) => {
            console.log("The weight is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                this.weightTemp[i] = data[i].valuenum;
            }
        }, (error) => {
            console.log(error);
        });
    }

    getSystolicBloodPressure() {
        return this.systolicBloodPressureService.getSystolicBloodPressure(this.quantity, this.systolicBloodPressure).toPromise().then((data) => {
            console.log("The systolic is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                this.BloodPressureTemp[i] = data[i].valuenum + ' / ';
            }
        }, (error) => {
            console.log(error);
        });
    }

    getDiastolicBloodPressure() {
        return this.diastolicBloodPressureService.getDiastolicBloodPressure(this.quantity, this.diastolicBloodPressure).toPromise().then((data) => {
            console.log("The diastolic is:", data);
            for (let i = 0; i < this.quantity; i++) {
                this.BloodPressureTemp[i] += data[i].valuenum;
            }
        }, (error) => {
            console.log(error);
        });
    }

    getBloodGlucose() {
        return this.bloodGlucoseService.getBloodGlucose(this.quantity, this.bloodGlucose).toPromise().then((data) => {
            console.log("The bloodglucose is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                this.bloodGlucoseTemp[i] = +((data[i].valuenum / 18).toFixed(1));
            }
        }, (error) => {
            console.log(error);
        });
    }

    getBloodOxygen() {
        return this.bloodOxygenService.getBloodOxygen(this.quantity, this.bloodOxygen).toPromise().then((data) => {
            console.log("The bloodOxygen is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                this.bloodOxygenTemp[i] = data[i].valuenum;
            }
        }, (error) => {
            console.log(error);
        });
    }

    getTobaccoUse() {
        return this.tobaccoUseService.getTobaccoUse(this.quantity, this.tobaccoUse).toPromise().then((data) => {
            console.log("The tobaccoUse is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                if (data[i].value == "Never used") {
                    this.tobaccoUseTemp[i] = "Nem doházik";
                }
                if (data[i].value == "Current use or use within 1 month of admission") {
                    this.tobaccoUseTemp[i] = "Dohányzó";
                }
                if (data[i].value == "Former user - stopped more than 1 year ago") {
                    this.tobaccoUseTemp[i] = "Leszokott (több mint egy éve)";
                }
                if (data[i].value == "Stopped more than 1 month ago, but less than 1 year ago") {
                    this.tobaccoUseTemp[i] = "Leszokott (több mint egy hónapja)"
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    getLeftLowerLung() {
        return this.leftLowerLungService.getLeftLowerLung(this.quantity, this.lungSound).toPromise().then((data) => {
            console.log("1. The leftLowerLungSound is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                if (data[i].value == "Bronchial") {
                    this.lungSoundTemp[i] = "Hörgő" + ' / ';
                }
                if (data[i].value == "Exp Wheeze") {
                    this.lungSoundTemp[i] = "Kilégzéskor ziháló" + ' / ';
                }
                if (data[i].value == "Diminished") {
                    this.lungSoundTemp[i] = "Gyenge" + ' / ';
                }
                if (data[i].value == "Crackles") {
                    this.lungSoundTemp[i] = "Ropogó" + ' / ';
                }
                if (data[i].value == "Clear") {
                    this.lungSoundTemp[i] = "Tiszta" + ' / ';
                }
                if (data[i].value == "Absent") {
                    this.lungSoundTemp[i] = "Hiányos" + ' / ';
                }
                if (data[i].value == "Rhonchi") {
                    this.lungSoundTemp[i] = "Zajos" + ' / ';
                }
                if (data[i].value == "Insp Wheeze") {
                    this.lungSoundTemp[i] = "Belégzéskor ziháló" + ' / ';
                }
                if (data[i].value == "Pleural Friction") {
                    this.lungSoundTemp[i] = "Pleurális dörzszörej" + ' / ';
                }
                if (data[i].value == "Coarse") {
                    this.lungSoundTemp[i] = "Dúrva" + ' / ';
                }
                if (data[i].value == "Ins/Exp Wheeze") {
                    this.lungSoundTemp[i] = "Be- és kilégzéskor ziháló" + ' / ';
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    getLeftUpperLung() {
        return this.leftUpperLungService.getLeftUpperLung(this.quantity, this.lungSound).toPromise().then((data) => {
            console.log("2. The leftUpperLungSound is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                if (data[i].value == "Bronchial") {
                    this.lungSoundTemp[i] += "Hörgő" + ' / ';
                }
                if (data[i].value == "Exp Wheeze") {
                    this.lungSoundTemp[i] += "Kilégzéskor ziháló" + ' / ';
                }
                if (data[i].value == "Diminished") {
                    this.lungSoundTemp[i] += "Gyenge" + ' / ';
                }
                if (data[i].value == "Crackles") {
                    this.lungSoundTemp[i] += "Ropogó" + ' / ';
                }
                if (data[i].value == "Clear") {
                    this.lungSoundTemp[i] += "Tiszta" + ' / ';
                }
                if (data[i].value == "Absent") {
                    this.lungSoundTemp[i] += "Hiányos" + ' / ';
                }
                if (data[i].value == "Rhonchi") {
                    this.lungSoundTemp[i] += "Zajos" + ' / ';
                }
                if (data[i].value == "Insp Wheeze") {
                    this.lungSoundTemp[i] += "Belégzéskor ziháló" + ' / ';
                }
                if (data[i].value == "Pleural Friction") {
                    this.lungSoundTemp[i] += "Pleurális dörzszörej" + ' / ';
                }
                if (data[i].value == "Coarse") {
                    this.lungSoundTemp[i] += "Dúrva" + ' / ';
                }
                if (data[i].value == "Ins/Exp Wheeze") {
                    this.lungSoundTemp[i] += "Be- és kilégzéskor ziháló" + ' / ';
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    getRightLowerLung() {
        return this.rightLowerLungService.getRightLowerLung(this.quantity, this.lungSound).toPromise().then((data) => {
            console.log("3. The rigthLowerLungSound is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                if (data[i].value == "Bronchial") {
                    this.lungSoundTemp[i] += "Hörgő" + ' / ';
                }
                if (data[i].value == "Exp Wheeze") {
                    this.lungSoundTemp[i] += "Kilégzéskor ziháló" + ' / ';
                }
                if (data[i].value == "Diminished") {
                    this.lungSoundTemp[i] += "Gyenge" + ' / ';
                }
                if (data[i].value == "Crackles") {
                    this.lungSoundTemp[i] += "Ropogó" + ' / ';
                }
                if (data[i].value == "Clear") {
                    this.lungSoundTemp[i] += "Tiszta" + ' / ';
                }
                if (data[i].value == "Absent") {
                    this.lungSoundTemp[i] += "Hiányos" + ' / ';
                }
                if (data[i].value == "Rhonchi") {
                    this.lungSoundTemp[i] += "Zajos" + ' / ';
                }
                if (data[i].value == "Insp Wheeze") {
                    this.lungSoundTemp[i] += "Belégzéskor ziháló" + ' / ';
                }
                if (data[i].value == "Pleural Friction") {
                    this.lungSoundTemp[i] += "Pleurális dörzszörej" + ' / ';
                }
                if (data[i].value == "Coarse") {
                    this.lungSoundTemp[i] += "Dúrva" + ' / ';
                }
                if (data[i].value == "Ins/Exp Wheeze") {
                    this.lungSoundTemp[i] += "Be- és kilégzéskor ziháló" + ' / ';
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    getRightUpperLung() {
        return this.rightUpperLungService.getRightUpperLung(this.quantity, this.lungSound).toPromise().then((data) => {
            console.log("4. The rigthUpperLungSound is: ", data);
            for (let i = 0; i < this.quantity; i++) {
                if (data[i].value == "Bronchial") {
                    this.lungSoundTemp[i] += "Hörgő";
                }
                if (data[i].value == "Exp Wheeze") {
                    this.lungSoundTemp[i] += "Kilégzéskor ziháló";
                }
                if (data[i].value == "Diminished") {
                    this.lungSoundTemp[i] += "Gyenge";
                }
                if (data[i].value == "Crackles") {
                    this.lungSoundTemp[i] += "Ropogó";
                }
                if (data[i].value == "Clear") {
                    this.lungSoundTemp[i] += "Tiszta";
                }
                if (data[i].value == "Absent") {
                    this.lungSoundTemp[i] += "Hiányos";
                }
                if (data[i].value == "Rhonchi") {
                    this.lungSoundTemp[i] += "Zajos";
                }
                if (data[i].value == "Insp Wheeze") {
                    this.lungSoundTemp[i] += "Belégzéskor ziháló";
                }
                if (data[i].value == "Pleural Friction") {
                    this.lungSoundTemp[i] += "Pleurális dörzszörej";
                }
                if (data[i].value == "Coarse") {
                    this.lungSoundTemp[i] += "Dúrva";
                }
                if (data[i].value == "Ins/Exp Wheeze") {
                    this.lungSoundTemp[i] += "Be- és kilégzéskor ziháló";
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    public makePatient(i: number): PatientInterface {
        console.log("makePatient called");

        return { "gender": this.genderTemp[i], "age": this.ageTemp[i], "height": this.heightTemp[i], "weight": this.weightTemp[i], "bloodPressure": this.BloodPressureTemp[i], "bloodGlucose": this.bloodGlucoseTemp[i], "bloodOxygen": this.bloodOxygenTemp[i], "tobaccoUse": this.tobaccoUseTemp[i], "lungSound": this.lungSoundTemp[i] };
    }

    async getData() {
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
            await this.getBloodGlucose();
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
        for (let i = 0; i < this.quantity; i++) {
            // setTimeout(() => {
            //     this.makePatient(i);
            // }, 1000);
            setTimeout(() => {
                this.patient = this.makePatient(i);
                this.patientEmitter.emit(this.patient);
            }, 1000);
            console.log("emmiter called!");
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
