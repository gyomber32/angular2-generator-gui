import { Injectable, Optional } from '@angular/core';

import { AgeApi } from '../shared/sdk/services/custom/Age';

@Injectable()
export class AgeService {

  constructor(private ageApi: AgeApi) { }

  public getAge(@Optional() age: number) {
    if (age == null) {
      return this.ageApi.getAge();
    }
    if (age != null) {
      return this.ageApi.getAge(age);
    }
  }

}
