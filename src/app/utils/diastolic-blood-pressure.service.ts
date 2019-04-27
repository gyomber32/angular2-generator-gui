import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DiastolicBloodPressureApi } from '../shared/sdk';

@Injectable()
export class DiastolicBloodPressureService {

  constructor(private diastolicBloodPressureApi: DiastolicBloodPressureApi) { }

  public getDiastolicBloodPressure(quantity: number, diastolicBloodPressure?: number): Observable<any> {
    if (diastolicBloodPressure == null) {
      return this.diastolicBloodPressureApi.getDiastolicBloodPressure(diastolicBloodPressure, quantity);
    }
    if (diastolicBloodPressure != null) {
      return this.diastolicBloodPressureApi.getDiastolicBloodPressure(diastolicBloodPressure, quantity);
    }
  }

}
