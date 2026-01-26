import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from "./components/products/products.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('monas-bakery');
}
