import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProductsComponent } from "../../components/products/products.component";

@Component({
  standalone: true,
  imports: [HeroComponent, ProductsComponent],
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {}
