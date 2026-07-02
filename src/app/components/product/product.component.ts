import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlertCircle } from '@ng-icons/feather-icons';
import { ProductsService } from '../../services/products.services';
import { Product } from '../../types/product.types';
import { ButtonComponent } from "../button/button.component";

@Component({
  imports: [CurrencyPipe, NgIcon, ButtonComponent],
  selector: 'monauppi-product',
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
