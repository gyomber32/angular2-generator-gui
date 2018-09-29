import { Injectable, Optional } from '@angular/core';

import { RightUpperLungApi } from '../shared/sdk/services/custom/RightUpperLung';

@Injectable()
export class RightUpperLungService {

  constructor(private rightUpperLungApi: RightUpperLungApi) { }

  public getRightUpperLung(@Optional() rul: string) {
    if (rul == undefined) {
      return this.rightUpperLungApi.getRul();
    }
    if (rul != undefined) {
      return this.rightUpperLungApi.getRul();
    }
  }

}
