import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherMenu } from '@ng-icons/feather-icons';

@Component({
  imports: [NgIcon],
  selector: 'app-header',
  templateUrl: 'header.component.html',
  viewProviders: [provideIcons({ featherMenu })],
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
