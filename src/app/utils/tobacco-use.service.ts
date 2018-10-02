import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TobaccoUseApi } from '../shared/sdk/services/custom/TobaccoUse';

@Injectable()
export class TobaccoUseService {

  constructor(private tobaccoUseApi: TobaccoUseApi) { }

  public getTobaccoUse(tobaccoUse?: string): Observable<any> {
    if (tobaccoUse == undefined) {
      return this.tobaccoUseApi.getTobaccoUse();
    }
    if (tobaccoUse != undefined) {
      return this.tobaccoUseApi.getTobaccoUse(tobaccoUse);
    }
  }

}
