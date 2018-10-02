import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeightApi } from '../shared/sdk/services/custom/Weight';

@Injectable()
export class WeightService {

  constructor(private weightApi: WeightApi) { }

  public getWeight(weight?: number): Observable<any> {
    if (weight == null) {
      return this.weightApi.getWeight();
    }
    if (weight != null) {
      return this.weightApi.getWeight(weight);
    }
  }

}
