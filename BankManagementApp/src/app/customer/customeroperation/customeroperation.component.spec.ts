import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeroperationComponent } from './customeroperation.component';

describe('CustomeroperationComponent', () => {
  let component: CustomeroperationComponent;
  let fixture: ComponentFixture<CustomeroperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomeroperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomeroperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
