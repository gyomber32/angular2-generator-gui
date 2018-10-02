import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RightLowerLungApi } from '../shared/sdk/services/custom/RightLowerLung';

@Injectable()
export class RightLowerLungService {

  constructor(private rightLowerLungApi: RightLowerLungApi) { }

  public getRightLowerLung(rll?: string): Observable<any> {
    if (rll == undefined) {
      return this.rightLowerLungApi.getRll();
    }
    if (rll != undefined) {
      return this.rightLowerLungApi.getRll(rll);
    }
  }

}
