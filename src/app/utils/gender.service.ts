import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GenderApi } from '../shared/sdk/services/custom/Gender';

@Injectable()
export class GenderService {

  constructor(private genderApi: GenderApi) { }

  getGender(gender?: string): Observable<any> {
    if (gender == null) {
      return this.genderApi.getGender();
    }
    if (gender != null) {
      return this.genderApi.getGender(gender);
    }
  }

}
