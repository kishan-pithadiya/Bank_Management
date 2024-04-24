import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionOperationComponent } from './transaction-operation.component';

describe('TransactionOperationComponent', () => {
  let component: TransactionOperationComponent;
  let fixture: ComponentFixture<TransactionOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
