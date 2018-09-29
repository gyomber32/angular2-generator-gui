import { Injectable, Optional } from '@angular/core';

import { DiastolicBloodPressureApi } from '../shared/sdk';

@Injectable()
export class DiastolicBloodPressureService {

  constructor(private diastolicBloodPressureApi: DiastolicBloodPressureApi) { }

  public getDiastolicBloodPressure(@Optional() diastolicBloodPressure: number) {
    if (diastolicBloodPressure == null) {
      return this.diastolicBloodPressureApi.getDiastolicBloodPressure();
    }
    if (diastolicBloodPressure != null) {
      return this.diastolicBloodPressureApi.getDiastolicBloodPressure(diastolicBloodPressure);
    }
  }

}
