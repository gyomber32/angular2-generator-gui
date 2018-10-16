import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AgeApi } from '../shared/sdk/services/custom/Age';

@Injectable()
export class AgeService {

  constructor(private ageApi: AgeApi) { }

  public getAge(quantity: number, age?: number): Observable <any> {
    if (age == null) {
      return this.ageApi.getAge(age, quantity);
    }
    if (age != null) {
      return this.ageApi.getAge(age, quantity);
    }
  }

}
