import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BloodOxygenApi } from '../shared/sdk/services/custom/BloodOxygen';

@Injectable()
export class BloodOxygenService {

  constructor(private bloodOxygenApi: BloodOxygenApi) { }

  public getBloodOxygen(bloodOxygen?: number): Observable<any> {
    if (bloodOxygen == null) {
      return this.bloodOxygenApi.getBloodOxygen();
    }
    if (bloodOxygen != null) {
      return this.bloodOxygenApi.getBloodOxygen(bloodOxygen);
    }
  }

}
