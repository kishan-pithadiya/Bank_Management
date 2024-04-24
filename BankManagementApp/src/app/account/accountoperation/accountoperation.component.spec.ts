import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountoperationComponent } from './accountoperation.component';

describe('AccountoperationComponent', () => {
  let component: AccountoperationComponent;
  let fixture: ComponentFixture<AccountoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountoperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
