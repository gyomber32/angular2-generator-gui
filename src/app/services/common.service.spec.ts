import { CommonService } from './common.service';
import { Config } from '../shared/config';

describe('CommonService', () => {
    let commonService: CommonService;
    const config = new Config;
    beforeEach(() => {
        commonService = new CommonService(config);
    });

    it('updateAge should set age', () => {
        commonService.updateAge(25);
        const age = config.age;
        expect(age).toBe(25);
    });

    it('updateGender should set gender', () => {
        commonService.updateGender('M');
        const gender = config.gender;
        expect(gender).toBe('M');
    });

    it('updateHeight should set height', () => {
        commonService.updateHeight(180);
        const height = config.height;
        expect(height).toBe(180);
    });

    it('updateWeight should set weight', () => {
        commonService.updateWeight(90);
        const weight = config.weight;
        expect(weight).toBe(90);
    });

    it('updateSystolicBloodPressure should set systolicBloodPressure', () => {
        commonService.updateSystolicBloodPressure(120);
        const systolicBloodPressure = config.systolicBloodPressure;
        expect(systolicBloodPressure).toBe(120);
    });

    it('updateDiastolicBloodPressure should set diastolicBloodPressure', () => {
        commonService.updateDiastolicBloodPressure(80);
        const diastolicBloodPressure = config.diastolicBloodPressure;
        expect(diastolicBloodPressure).toBe(80);
    });

    it('updateBloodGlucose should set bloodGlucose', () => {
        commonService.updateBloodGlucose(8);
        const bloodGlucose = config.bloodGlucose;
        expect(bloodGlucose).toBe(8);
    });

    it('updateBloodOxygen should set bloodOxygen', () => {
        commonService.updateBloodOxygen(98);
        const bloodOxygen = config.bloodOxygen;
        expect(bloodOxygen).toBe(98);
    });

    it('updateTobaccoUse should set tobaccoUse', () => {
        commonService.updateTobaccoUse('Never Used');
        const tobaccoUse = config.tobaccoUse;
        expect(tobaccoUse).toBe('Never Used');
    });

    it('updateLungSound should set lungSound', () => {
        commonService.updateLungSound('Clear');
        const lungSound = config.lungSound;
        expect(lungSound).toBe('Clear');
    });

    it('updateQuantity should set quantity', () => {
        commonService.updateQuantity(50);
        const quantity = config.quantity;
        expect(quantity).toBe(50);
    });

    it('updateSaveToFile should set saveToFile to true', () => {
        commonService.updateSaveToFile(true);
        const saveToFile = config.saveToFile;
        expect(saveToFile).toBe(true);
    });

    it('updateSaveToFile should set saveToFile to false', () => {
        commonService.updateSaveToFile(false);
        const saveToFile = config.saveToFile;
        expect(saveToFile).toBe(false);
    });

    it('updateWatching should set watching to true', () => {
        commonService.updateWatching(true);
        const watching = config.watching;
        expect(watching).toBe(true);
    });

    it('updateWatching should set watching to false', () => {
        commonService.updateWatching(false);
        const watching = config.watching;
        expect(watching).toBe(false);
    });

    it('getWatching should return boolean value', () => {
        expect(commonService.getWatching()).toMatch(/true|false/);
    });

    it('getWatching should return false', () => {
        commonService.updateWatching(false);
        expect(commonService.getWatching()).toEqual(false);
    });

    it('getWatching should return true', () => {
        commonService.updateWatching(true);
        expect(commonService.getWatching()).toEqual(true);
    });

    it('updateTypeOfGenerating should set typeOfGenerating', () => {
        commonService.updateTypeOfGenerating('Egyszeri adatgenerálás');
        const typeOfGenerating = config.typeOfGenerating;
        expect(typeOfGenerating).toBe('Egyszeri adatgenerálás');
    });

    it('getTypeOfGenerating should return value', () => {
        commonService.updateTypeOfGenerating('Egyszeri adatgenerálás');
        expect(commonService.getTypeOfGenerating()).toBe('Egyszeri adatgenerálás');
    });

    it('getTypeOfGenerating should return value', () => {
        commonService.updateTypeOfGenerating('Ütemezett adatgenerálás');
        expect(commonService.getTypeOfGenerating()).toBe('Ütemezett adatgenerálás');
    });

   /*  it('updateDateAndTime should set dateAndTime to number array', () => {
        commonService.updateDateAndTime([2018, 11, 3, 10, 53, 0]);
        const dateAndTime = config.dateAndTime;
        expect(dateAndTime).toBe([2018, 11, 3, 10, 53, 0]);
    });

    it('updateEndPoints should set endPoints to string array', () => {
        commonService.updateEndPoints(['endPoint1', 'endPoint2']);
        expect(commonService.getEndPoints()).toBe(['endPoint1', 'endPoint2']);
    });

    it('getEndPoints should return string array', () => {
        commonService.updateEndPoints(['endPoint1', 'endPoint2']);
        expect(commonService.getEndPoints()).toBe(['endPoint1', 'endPoint2']);
    }); */

});
