import { Injectable, Optional } from '@angular/core';

import { LeftUpperLungApi } from '../shared/sdk/services/custom/LeftUpperLung';

@Injectable()
export class LeftUpperLungService {

  constructor(private leftUpperLungApi: LeftUpperLungApi) { }

  public getLeftUpperLung(@Optional() lul: string) {
    if (lul == undefined) {
      return this.leftUpperLungApi.getLul();
    }
    if (lul != undefined) {
      return this.leftUpperLungApi.getLul(lul);
    }
  }

}
