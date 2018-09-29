import { Injectable, Optional } from '@angular/core';

import { WeightApi } from '../shared/sdk/services/custom/Weight';

@Injectable()
export class WeightService {

  constructor(private weightApi: WeightApi) { }

  public getWeight(@Optional() weight: number) {
    if (weight == null) {
      return this.weightApi.getWeight();
    }
    if (weight != null) {
      return this.weightApi.getWeight(weight);
    }
  }

}
