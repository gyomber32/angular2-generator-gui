import { TestBed, inject } from '@angular/core/testing';

import { LeftUpperLungService } from './left-upper-lung.service';

describe('LeftUpperLungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftUpperLungService]
    });
  });

  it('should be created', inject([LeftUpperLungService], (service: LeftUpperLungService) => {
    expect(service).toBeTruthy();
  }));
});
