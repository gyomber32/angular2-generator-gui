import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, config } from 'rxjs';

import { Config } from '../shared/config.interface';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    private configFinale = new BehaviorSubject<Config>(this.config);

    // tslint:disable-next-line:no-shadowed-variable
    constructor(private config: Config) { }

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

    updateTypeOfGenerating(typeOfGenerating: string): void {
        this.config.typeOfGenerating = typeOfGenerating;
    }

    updateDateAndTime(dateAndTime: string): void {
        this.config.dateAndTime = dateAndTime;
    }

    updateEndPoints(endPoints: string[]): void {
        this.config.endPoints = endPoints;
    }
}
