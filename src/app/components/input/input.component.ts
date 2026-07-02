import { NgClass } from '@angular/common';
import { Component, input, model } from '@angular/core';

@Component({
  selector: 'monauppi-input',
  templateUrl: './input.component.html',
  imports: [NgClass],
})
export class InputComponent {
  public inputId$ = input<string>(`input-${Math.random().toString(36).slice(2, 9)}`);
  public label$ = input<string>('');
  public placeholder$ = input<string>('');
  public type$ = input<string>('text');
  public error$ = input<string>('');
  public value$ = model<string>('');
}
