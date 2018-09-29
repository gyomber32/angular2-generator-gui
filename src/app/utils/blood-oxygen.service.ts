import { Injectable, Optional } from '@angular/core';

import { BloodOxygenApi } from '../shared/sdk/services/custom/BloodOxygen';

@Injectable()
export class BloodOxygenService {

  constructor(private bloodOxygenApi: BloodOxygenApi) { }

  public getBloodOxygen(@Optional() bloodOxygen: number) {
    if (bloodOxygen == null) {
      this.bloodOxygenApi.getBloodOxygen();
    }
    if (bloodOxygen != null) {
      this.bloodOxygenApi.getBloodOxygen(bloodOxygen);
    }
  }

}
