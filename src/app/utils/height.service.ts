import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { HeightApi } from '../shared/sdk/services/custom/Height';

@Injectable()
export class HeightService {

  constructor(private heightApi: HeightApi) { }

  public getHeight(quantity: number, height?: number): Observable<any> {
    if (height == null) {
      return this.heightApi.getHeight(height, quantity);
    }
    if (height != null) {
      return this.heightApi.getHeight(height, quantity);
    }
  }

}
