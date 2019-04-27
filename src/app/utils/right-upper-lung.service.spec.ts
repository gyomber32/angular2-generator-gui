import { TestBed, inject } from '@angular/core/testing';

import { RightUpperLungService } from './right-upper-lung.service';

describe('RightUpperLungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightUpperLungService]
    });
  });

  it('should be created', inject([RightUpperLungService], (service: RightUpperLungService) => {
    expect(service).toBeTruthy();
  }));
});
