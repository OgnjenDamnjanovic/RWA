import { TestBed } from '@angular/core/testing';

import { ColorAvailableService } from './color-available.service';

describe('ColorAvailableService', () => {
  let service: ColorAvailableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorAvailableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
