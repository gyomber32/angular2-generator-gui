import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BloodGlucoseApi } from '../shared/sdk/services/custom/BloodGlucose';

@Injectable()
export class BloodGlucoseService {

  constructor(private bloodGlucoseApi: BloodGlucoseApi) { }

  public getBloodGlucose(bloodGlucose?: number): Observable<any> {
    if (bloodGlucose == null) {
      return this.bloodGlucoseApi.getBloodGlucose();
    }
    if (bloodGlucose != null) {
      return this.bloodGlucoseApi.getBloodGlucose((bloodGlucose * 18));
    }
  }

}
