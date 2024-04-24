import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTransactionComponent } from './get-all-transaction.component';

describe('GetAllTransactionComponent', () => {
  let component: GetAllTransactionComponent;
  let fixture: ComponentFixture<GetAllTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
