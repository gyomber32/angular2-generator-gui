import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AgeApi } from '../shared/sdk/services/custom/Age';

@Injectable()
export class AgeService {

  constructor(private ageApi: AgeApi) { }

  public getAge(age?: number): Observable <any> {
    if (age == null) {
      return this.ageApi.getAge();
    }
    if (age != null) {
      return this.ageApi.getAge(age);
    }
  }

}
