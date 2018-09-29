import { TestBed, inject } from '@angular/core/testing';

import { BloodGlucoseService } from './blood-glucose.service';

describe('BloodGlucoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodGlucoseService]
    });
  });

  it('should be created', inject([BloodGlucoseService], (service: BloodGlucoseService) => {
    expect(service).toBeTruthy();
  }));
});
