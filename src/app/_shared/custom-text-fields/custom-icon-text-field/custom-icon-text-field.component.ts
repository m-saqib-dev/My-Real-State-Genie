import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon-text-field',
  templateUrl: './custom-icon-text-field.component.html',
  styleUrls: ['./custom-icon-text-field.component.scss']
})
export class CustomIconTextFieldComponent {
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() hint!: string;
  @Input() label!: string;
}
