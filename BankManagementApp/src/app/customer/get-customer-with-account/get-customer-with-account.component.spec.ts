import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerWithAccountComponent } from './get-customer-with-account.component';

describe('GetCustomerWithAccountComponent', () => {
  let component: GetCustomerWithAccountComponent;
  let fixture: ComponentFixture<GetCustomerWithAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCustomerWithAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCustomerWithAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
