import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DiastolicBloodPressureApi } from '../shared/sdk';

@Injectable()
export class DiastolicBloodPressureService {

  constructor(private diastolicBloodPressureApi: DiastolicBloodPressureApi) { }

  public getDiastolicBloodPressure(diastolicBloodPressure?: number): Observable<any> {
    if (diastolicBloodPressure == null) {
      return this.diastolicBloodPressureApi.getDiastolicBloodPressure();
    }
    if (diastolicBloodPressure != null) {
      return this.diastolicBloodPressureApi.getDiastolicBloodPressure(diastolicBloodPressure);
    }
  }

}
