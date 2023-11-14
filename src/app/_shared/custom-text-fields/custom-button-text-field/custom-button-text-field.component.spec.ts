import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonTextFieldComponent } from './custom-button-text-field.component';

describe('CustomButtonTextFieldComponent', () => {
  let component: CustomButtonTextFieldComponent;
  let fixture: ComponentFixture<CustomButtonTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomButtonTextFieldComponent]
    });
    fixture = TestBed.createComponent(CustomButtonTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
