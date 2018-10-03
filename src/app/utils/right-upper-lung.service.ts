import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RightUpperLungApi } from '../shared/sdk/services/custom/RightUpperLung';

@Injectable()
export class RightUpperLungService {

  constructor(private rightUpperLungApi: RightUpperLungApi) { }

  public getRightUpperLung(rul?: string): Observable<any> {
    if (rul == undefined) {
      return this.rightUpperLungApi.getRul();
    }
    if (rul != undefined) {
      return this.rightUpperLungApi.getRul(rul);
    }
  }

}
