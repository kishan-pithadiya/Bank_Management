import { TestBed } from '@angular/core/testing';

import { TransactionInfoService } from './transaction-info.service';

describe('TransactionInfoService', () => {
  let service: TransactionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
