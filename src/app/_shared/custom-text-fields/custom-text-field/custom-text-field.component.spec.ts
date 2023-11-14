import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextFieldComponent } from './custom-text-field.component';

describe('CustomTextFieldComponent', () => {
  let component: CustomTextFieldComponent;
  let fixture: ComponentFixture<CustomTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTextFieldComponent]
    });
    fixture = TestBed.createComponent(CustomTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
