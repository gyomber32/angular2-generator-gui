import { TestBed, inject } from '@angular/core/testing';

import { LeftLowerLungService } from './left-lower-lung.service';

describe('LeftLowerLungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftLowerLungService]
    });
  });

  it('should be created', inject([LeftLowerLungService], (service: LeftLowerLungService) => {
    expect(service).toBeTruthy();
  }));
});
