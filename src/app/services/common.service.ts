import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Config } from '../shared/config';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private configFinale = new BehaviorSubject<Config>(this.config);

    // tslint:disable-next-line:no-shadowed-variable
    constructor(private config: Config) {
        this.config.age = null;
        this.config.gender = '';
        this.config.height = null;
        this.config.weight = null;
        this.config.systolicBloodPressure = null;
        this.config.diastolicBloodPressure = null;
        this.config.bloodGlucose = null;
        this.config.bloodOxygen = null;
        this.config.tobaccoUse = '';
        this.config.lungSound = '';
        this.config.quantity = null;
        this.config.saveToFile = false;
        this.config.watching = false;
        this.config.typeOfGenerating = '';
        this.config.dateAndTime = [];
        this.config.endPoints = [];
    }

    castConfig = this.configFinale.asObservable();

    updateAge(age: number): void {
        this.config.age = age;
    }

    updateGender(gender: string): void {
        this.config.gender = gender;
    }

    updateHeight(height: number): void {
        this.config.height = height;
    }

    updateWeight(weight: number): void {
        this.config.weight = weight;
    }

    updateSystolicBloodPressure(systolicBloodPressure: number): void {
        this.config.systolicBloodPressure = systolicBloodPressure;
    }

    updateDiastolicBloodPressure(diastolicBloodPressure: number): void {
        this.config.diastolicBloodPressure = diastolicBloodPressure;
    }

    updateBloodGlucose(bloodGlucose: number): void {
        this.config.bloodGlucose = bloodGlucose;
    }

    updateBloodOxygen(bloodOxygen: number): void {
        this.config.bloodOxygen = bloodOxygen;
    }

    updateTobaccoUse(tobaccoUse: string): void {
        this.config.tobaccoUse = tobaccoUse;
    }

    updateLungSound(lungSound: string): void {
        this.config.lungSound = lungSound;
    }

    updateQuantity(quantity: number): void {
        this.config.quantity = quantity;
    }

    updateSaveToFile(saveToFile: boolean): void {
        this.config.saveToFile = saveToFile;
    }

    updateWatching(watching: boolean): void {
        this.config.watching = watching;
    }

    getWatching(): boolean {
        return this.config.watching;
    }

    updateTypeOfGenerating(typeOfGenerating: string): void {
        this.config.typeOfGenerating = typeOfGenerating;
    }

    getTypeOfGenerating(): string {
        return this.config.typeOfGenerating;
    }

    updateDateAndTime(dateAndTime: number[]): void {
        this.config.dateAndTime = dateAndTime;
    }

    updateEndPoints(endPoints: string[]): void {
        this.config.endPoints = endPoints;
    }

    getEndPoints(): string[] {
        return this.config.endPoints;
    }
}
