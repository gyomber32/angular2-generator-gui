import { TestBed, inject } from '@angular/core/testing';

import { DiastolicBloodPressureService } from './diastolic-blood-pressure.service';

describe('DiastolicBloodPressureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiastolicBloodPressureService]
    });
  });

  it('should be created', inject([DiastolicBloodPressureService], (service: DiastolicBloodPressureService) => {
    expect(service).toBeTruthy();
  }));
});
