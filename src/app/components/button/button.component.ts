import { Component, input, output, computed } from '@angular/core';
import { ButtonType, ButtonVariant } from './button.type';

@Component({
  selector: 'monauppi-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public variant$ = input<ButtonVariant>('primary');
  public type$ = input<ButtonType>('button');
  public disabled$ = input<boolean>(false);
  public clicked = output<MouseEvent>();
  public additionalClasses$ = input<string>('');

  /**
   * Computes the CSS class for the button based on its variant.
   */
  public variantClass$ = computed<string>(
    () => `button button-${this.variant$()} ${this.additionalClasses$()}`,
  );
}
