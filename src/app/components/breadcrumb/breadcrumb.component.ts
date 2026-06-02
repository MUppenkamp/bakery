import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherMenu } from '@ng-icons/feather-icons';

@Component({
  imports: [NgIcon],
  selector: 'app-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  viewProviders: [provideIcons({ featherMenu })],
  host: { class: 'sticky z-20 top-0 inset-s-0' },
})
export class BreadcrumbComponent {
  protected readonly items = [
    // TODO Maybe an icon to go to homepage
    { url: '', name: '🤎' },
    { url: '/Über', name: 'Über mich :)' },
    { url: '/Produkte', name: 'Produkte' },
    { url: '/Blog', name: 'Blog' },
    { url: '/Kontakt', name: 'Kontakt' },
  ];
}
