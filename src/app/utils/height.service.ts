import { Injectable, Optional } from '@angular/core';

import { HeightApi } from '../shared/sdk/services/custom/Height';

@Injectable()
export class HeightService {

  constructor(private heightApi: HeightApi) { }

  public getHeight(@Optional() height: number) {
    if (height == null) {
      return this.heightApi.getHeight();
    }
    if (height != null) {
      return this.heightApi.getHeight(height);
    }
  }

}
