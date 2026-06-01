import { Component, inject } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../../services/products.services';

@Component({
  imports: [ProductComponent],
  selector: 'app-products',
  templateUrl: 'products.component.html',
})
export class ProductsComponent {
  protected readonly productsService = inject(ProductsService);
}
