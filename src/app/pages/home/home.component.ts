import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductsService } from '../../services/products.services';

@Component({
  imports: [HeroComponent],
  selector: 'monauppi-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  protected readonly productsService = inject(ProductsService);
}
