import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherArrowRight } from '@ng-icons/feather-icons';
import { LinkComponent } from '../link/link.component';

@Component({
  imports: [NgIcon, LinkComponent],
  selector: 'monauppi-hero',
  templateUrl: 'hero.component.html',
  viewProviders: [provideIcons({ featherArrowRight })],
})
export class HeroComponent {}
