import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaccountbyidComponent } from './getaccountbyid.component';

describe('GetaccountbyidComponent', () => {
  let component: GetaccountbyidComponent;
  let fixture: ComponentFixture<GetaccountbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetaccountbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetaccountbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
