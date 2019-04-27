import { TestBed, inject } from '@angular/core/testing';

import { RightLowerLungService } from './right-lower-lung.service';

describe('RightLowerLungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightLowerLungService]
    });
  });

  it('should be created', inject([RightLowerLungService], (service: RightLowerLungService) => {
    expect(service).toBeTruthy();
  }));
});
