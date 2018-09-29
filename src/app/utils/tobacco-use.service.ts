import { Injectable, Optional } from '@angular/core';

import { TobaccoUseApi } from '../shared/sdk/services/custom/TobaccoUse';

@Injectable()
export class TobaccoUseService {

  constructor(private tobaccoUseApi: TobaccoUseApi) { }

  public getTobaccoUse(@Optional() tobaccoUse: string) {
    if (tobaccoUse == undefined) {
      return this.tobaccoUseApi.getTobaccoUse();
    }
    if (tobaccoUse != undefined) {
      return this.tobaccoUseApi.getTobaccoUse(tobaccoUse);
    }
  }

}
