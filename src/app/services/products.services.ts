import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../types/product.types';
import { products } from './products.data';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  /**
   * List of products
   */
  public readonly products$ = signal<Product[]>(products);

  /**
   * Record containing the id of the product and the selected amount
   */
  private readonly _selectedProducts$ = signal<Record<string, number>>({});

  /**
   * @see _selectedProducts$
   */
  public readonly selectedProducts$ = computed<Record<string, number>>(() => this._selectedProducts$());

  /**
   * Contains the products grouped by category. The key is the category and the value is an array of products in that category.
   */
  public readonly productsByCategory$ = computed<Map<string, Product[]>>(() => {
    const products = this.products$();
    const productsByCategory = new Map<string, Product[]>();

    products.forEach((product) => {
      const categoryProducts = productsByCategory.get(product.category);

      if (categoryProducts) {
        categoryProducts.push(product);
      } else {
        productsByCategory.set(product.category, [product]);
      }
    });

    return productsByCategory;
  });

  /**
   * Contains the products that are marked as favorite
   */
  public readonly favoriteProducts$ = computed<Product[]>(() => {
    const products = this.products$();
    return products.filter((product) => product.isFavorite);
  });

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
