import { Injectable, Optional } from '@angular/core';

import { GenderApi } from '../shared/sdk/services/custom/Gender';

@Injectable()
export class GenderService {

  constructor(private genderApi: GenderApi) { }

  public getGender(@Optional() gender: string){
    if(gender == null){
      return this.genderApi.getGender();
    }
    if(gender != null){
      return this.genderApi.getGender(gender);
    }
  }

}
