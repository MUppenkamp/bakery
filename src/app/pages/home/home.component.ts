import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  imports: [HeroComponent],
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {}
