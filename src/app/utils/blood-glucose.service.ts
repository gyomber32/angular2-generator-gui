import { Injectable, Optional } from '@angular/core';

import { BloodGlucoseApi } from '../shared/sdk/services/custom/BloodGlucose';

@Injectable()
export class BloodGlucoseService {

  constructor(private bloodGlucoseApi: BloodGlucoseApi) { }

  public getAge(@Optional() bloodGlucose: number) {
    if (bloodGlucose == null) {
      return this.bloodGlucoseApi.getBloodGlucose();
    }
    if (bloodGlucose != null) {
      return this.bloodGlucoseApi.getBloodGlucose(bloodGlucose);
    }
  }

}
