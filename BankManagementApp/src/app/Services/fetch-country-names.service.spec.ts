import { TestBed } from '@angular/core/testing';

import { FetchCountryNamesService } from './fetch-country-names.service';

describe('FetchCountryNamesService', () => {
  let service: FetchCountryNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCountryNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
