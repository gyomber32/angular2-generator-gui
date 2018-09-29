import { TestBed, inject } from '@angular/core/testing';

import { SystolicBloodPressureService } from './systolic-blood-pressure.service';

describe('SystolicBloodPressureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystolicBloodPressureService]
    });
  });

  it('should be created', inject([SystolicBloodPressureService], (service: SystolicBloodPressureService) => {
    expect(service).toBeTruthy();
  }));
});
