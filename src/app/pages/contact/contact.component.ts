import { Component, signal } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  imports: [InputComponent, TextareaComponent, ButtonComponent],
  selector: 'monauppi-contact',
  templateUrl: 'contact.component.html',
})
export class ContactComponent {
  protected readonly name$ = signal<string>('');
  protected readonly email$ = signal<string>('');
  protected readonly message$ = signal<string>('');
}
