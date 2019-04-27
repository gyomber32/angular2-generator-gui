import { TestBed, inject } from '@angular/core/testing';

import { TobaccoUseService } from './tobacco-use.service';

describe('TobaccoUseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TobaccoUseService]
    });
  });

  it('should be created', inject([TobaccoUseService], (service: TobaccoUseService) => {
    expect(service).toBeTruthy();
  }));
});
