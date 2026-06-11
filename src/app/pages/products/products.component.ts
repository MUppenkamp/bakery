import { Component, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductsService } from '../../services/products.services';

@Component({
  imports: [ProductComponent],
  selector: 'monauppi-products',
  templateUrl: 'products.component.html',
})
export class ProductsComponent {
  protected readonly productsService = inject(ProductsService);
}
