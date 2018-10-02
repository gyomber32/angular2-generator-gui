import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SystolicBloodPressureApi } from '../shared/sdk/services/custom/SystolicBloodPressure';

@Injectable()
export class SystolicBloodPressureService {

  constructor(private systolicBloodPressureApi: SystolicBloodPressureApi) { }

  public getSystolicBloodPressure(systolicBloodPressure?: number): Observable<any> {
    if (systolicBloodPressure == null) {
      return this.systolicBloodPressureApi.getSystolicBloodPressure();
    }
    if (systolicBloodPressure != null) {
      return this.systolicBloodPressureApi.getSystolicBloodPressure(systolicBloodPressure);
    }
  }

}
