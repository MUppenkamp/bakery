// link.component.ts
import { Component, input, computed } from '@angular/core';
import { LinkAppearance, LinkTarget, LinkVariant } from './link.type';

@Component({
  selector: 'monauppi-link',
  templateUrl: './link.component.html',
})
export class LinkComponent {
  public href$ = input.required<string>();
  public target$ = input<LinkTarget>('_self');
  public appearance$ = input<LinkAppearance>('text');
  public variant$ = input<LinkVariant>('primary');
  public additionalClasses$ = input<string>('');

  /**
   * Computes rel attribute, forcing noopener noreferrer for external links.
   */
  public rel$ = computed<string | null>(() =>
    this.target$() === '_blank' ? 'noopener noreferrer' : null,
  );

  /**
   * Computes the CSS class for the link based on its appearance and variant.
   */
  public linkClass$ = computed<string>(() =>
    this.appearance$() === 'button'
      ? `button button-${this.variant$()} ${this.additionalClasses$()}`
      : `link ${this.additionalClasses$()}`,
  );
}
