import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconTextFieldComponent } from './custom-icon-text-field.component';

describe('CustomIconTextFieldComponent', () => {
  let component: CustomIconTextFieldComponent;
  let fixture: ComponentFixture<CustomIconTextFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomIconTextFieldComponent]
    });
    fixture = TestBed.createComponent(CustomIconTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
