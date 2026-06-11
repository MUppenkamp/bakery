import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherArrowRight } from '@ng-icons/feather-icons';

@Component({
  imports: [NgIcon],
  selector: 'monauppi-hero',
  templateUrl: 'hero.component.html',
  viewProviders: [provideIcons({ featherArrowRight })],
})
export class HeroComponent {}
