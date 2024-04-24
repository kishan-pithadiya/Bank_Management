import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerTransactionComponent } from './get-customer-transaction.component';

describe('GetCustomerTransactionComponent', () => {
  let component: GetCustomerTransactionComponent;
  let fixture: ComponentFixture<GetCustomerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCustomerTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCustomerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
