import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RightLowerLungApi } from '../shared/sdk/services/custom/RightLowerLung';

@Injectable()
export class RightLowerLungService {

  constructor(private rightLowerLungApi: RightLowerLungApi) { }

  public getRightLowerLung(quantity: number, rll?: string): Observable<any> {
    if (rll == undefined) {
      return this.rightLowerLungApi.getRll(rll, quantity);
    }
    if (rll != undefined) {
      return this.rightLowerLungApi.getRll(rll, quantity);
    }
  }

}
