import { Injectable, Optional } from '@angular/core';

import { SystolicBloodPressureApi } from '../shared/sdk/services/custom/SystolicBloodPressure';

@Injectable()
export class SystolicBloodPressureService {

  constructor(private systolicBloodPressureApi: SystolicBloodPressureApi) { }

  public getSystolicBloodPressure(@Optional() systolicBloodPressure: number) {
    if (systolicBloodPressure == null) {
      return this.systolicBloodPressureApi.getSystolicBloodPressure();
    }
    if (systolicBloodPressure != null) {
      return this.systolicBloodPressureApi.getSystolicBloodPressure(systolicBloodPressure);
    }
  }

}
