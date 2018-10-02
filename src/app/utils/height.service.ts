import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { HeightApi } from '../shared/sdk/services/custom/Height';

@Injectable()
export class HeightService {

  constructor(private heightApi: HeightApi) { }

  public getHeight(height?: number): Observable<any> {
    if (height == null) {
      return this.heightApi.getHeight();
    }
    if (height != null) {
      return this.heightApi.getHeight(height);
    }
  }

}
