import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RightUpperLungApi } from '../shared/sdk/services/custom/RightUpperLung';

@Injectable()
export class RightUpperLungService {

  constructor(private rightUpperLungApi: RightUpperLungApi) { }

  public getRightUpperLung(quantity: number, rul?: string): Observable<any> {
    if (rul == undefined) {
      return this.rightUpperLungApi.getRul(rul, quantity);
    }
    if (rul != undefined) {
      return this.rightUpperLungApi.getRul(rul, quantity);
    }
  }

}
