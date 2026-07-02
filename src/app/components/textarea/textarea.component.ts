import { NgClass } from '@angular/common';
import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'monauppi-textarea',
  templateUrl: './textarea.component.html',
  imports: [NgClass],
})
export class TextareaComponent {
  public textareaId$ = input<string>(`textarea-${Math.random().toString(36).slice(2, 9)}`);
  public label$ = input<string>('');
  public placeholder$ = input<string>('');
  public rows$ = input<number>(4);
  public error$ = input<string>('');
  public value$ = model<string>('');

  /**
   * Calculates the minimum block size for the textarea based on the number of rows and a fixed line height.
   */
  protected minBlockSize$ = computed(() => this.rows$() * 24 + 24);

  /**
   * Sets the value of the textarea and adjusts its block size based on the content.
   * @param event - The input event from the textarea element
   */
  protected setValue(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value$.set(target.value ?? '');

    target.style.blockSize = 'auto';
    target.style.blockSize = `${target.scrollHeight}px`;
  }
}
