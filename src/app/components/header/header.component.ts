import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  protected readonly items = [
    // TODO Maybe an icon to go to homepage
    { url: '', name: '🤎' },
    { url: '/Über', name: 'Über mich :)' },
    { url: '/Produkte', name: 'Produkte' },
    { url: '/Blog', name: 'Blog' },
    { url: '/Kontakt', name: 'Kontakt' },
  ];
}
