import { Injectable, Optional } from '@angular/core';

import { LeftLowerLungApi } from '../shared/sdk/services/custom/LeftLowerLung';

@Injectable()
export class LeftLowerLungService {

  constructor(private leftLowerLungApi: LeftLowerLungApi) { }

  public getLeftLowerLung(@Optional() lll: string) {
    if (lll == undefined) {
      return this.leftLowerLungApi.getLll();
    }
    if (lll != undefined) {
      return this.leftLowerLungApi.getLll(lll);
    }
  }

}
