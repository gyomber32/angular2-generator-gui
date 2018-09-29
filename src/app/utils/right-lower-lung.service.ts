import { Injectable, Optional } from '@angular/core';

import { RightLowerLungApi } from '../shared/sdk/services/custom/RightLowerLung';

@Injectable()
export class RightLowerLungService {

  constructor(private rightLowerLungApi: RightLowerLungApi) { }

  public getRightLowerLung(@Optional() rll: string) {
    if (rll == undefined) {
      return this.rightLowerLungApi.getRll
    }
    if (rll != undefined) {
      return this.rightLowerLungApi.getRll(rll);
    }
  }

}
