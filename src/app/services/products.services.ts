import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../types/product.types';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  /**
   * List of products
   * TODO https://github.com/MUppenkamp/bakery/issues/6
   */
  public products$ = signal<Product[]>([
    {
      id: '1',
      name: 'Hefe-Dinkelbrot',
      description:
        'Mein OG Brot, das ich schon seit Jahren backe und das immer super ankommt. Es ist ein sehr saftiges Brot mit einer knusprigen Kruste und einem tollen Geschmack.',
      price: 4,
      imageUrl: '/bread-and-cake.jpg',
    },
    {
      id: '2',
      name: 'Hefe-Dinkelbrot',
      description:
        'Mein OG Brot, das ich schon seit Jahren backe und das immer super ankommt. Es ist ein sehr saftiges Brot mit einer knusprigen Kruste und einem tollen Geschmack.',
      price: 4,
      imageUrl: '/bread-and-cake.jpg',
    },
    {
      id: '3',
      name: 'Hefe-Dinkelbrot',
      description:
        'Mein OG Brot, das ich schon seit Jahren backe und das immer super ankommt. Es ist ein sehr saftiges Brot mit einer knusprigen Kruste und einem tollen Geschmack.',
      price: 4,
      imageUrl: '/bread-and-cake.jpg',
    },
  ]);

  /**
   * Record containing the id of the product and the selected amount
   */
  private _selectedProducts$ = signal<Record<string, number>>({});

  /**
   * @see _selectedProducts$
   */
  public selectedProducts$ = computed<Record<string, number>>(() => this._selectedProducts$());

  /**
   * Updates the selected products with the given product id and amount
   * @param productId - id of the product
   * @param amount - amount of the product
   */
  public updateSelectedProducts(productId: string, amount: number): void {
    this._selectedProducts$.update((prev) => ({
      ...prev,
      [productId]: amount,
    }));
  }
}
