import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconButtonTextFieldComponent } from './custom-icon-button-text-field.component';

describe('CustomIconButtonTextFieldComponent', () => {
  let component: CustomIconButtonTextFieldComponent;
  let fixture: ComponentFixture<CustomIconButtonTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomIconButtonTextFieldComponent]
    });
    fixture = TestBed.createComponent(CustomIconButtonTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
