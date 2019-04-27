import { Injectable, Optional } from '@angular/core';

import { LeftUpperLungApi } from '../shared/sdk/services/custom/LeftUpperLung';

@Injectable()
export class LeftUpperLungService {

  constructor(private leftUpperLungApi: LeftUpperLungApi) { }

  public getLeftUpperLung(quantity: number, lul?: string) {
    if (lul == undefined) {
      return this.leftUpperLungApi.getLul(lul, quantity);
    }
    if (lul != undefined) {
      return this.leftUpperLungApi.getLul(lul, quantity);
    }
  }

}
