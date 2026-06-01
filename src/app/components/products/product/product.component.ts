import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../types/product.types';
import { ProductsService } from '../../../services/products.services';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlertCircle } from '@ng-icons/feather-icons';

@Component({
  imports: [CurrencyPipe, NgIcon],
  selector: 'app-product',
  templateUrl: 'product.component.html',
  viewProviders: [provideIcons({ featherAlertCircle })],
})
export class ProductComponent {
  protected readonly productsService = inject(ProductsService);

  /**
   * The product to display
   */
  public product$ = input.required<Product>();
}
