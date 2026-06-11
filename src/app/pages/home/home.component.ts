import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductsService } from '../../services/products.services';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  imports: [HeroComponent, ProductComponent],
  selector: 'monauppi-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  protected readonly productsService = inject(ProductsService);
}
