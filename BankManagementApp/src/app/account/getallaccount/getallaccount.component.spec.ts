import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallaccountComponent } from './getallaccount.component';

describe('GetallaccountComponent', () => {
  let component: GetallaccountComponent;
  let fixture: ComponentFixture<GetallaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
