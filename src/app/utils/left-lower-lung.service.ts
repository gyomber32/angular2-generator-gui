import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LeftLowerLungApi } from '../shared/sdk/services/custom/LeftLowerLung';

@Injectable()
export class LeftLowerLungService {

  constructor(private leftLowerLungApi: LeftLowerLungApi) { }

  public getLeftLowerLung(lll?: string): Observable<any> {
    if (lll == undefined) {
      return this.leftLowerLungApi.getLll();
    }
    if (lll != undefined) {
      return this.leftLowerLungApi.getLll(lll);
    }
  }

}
