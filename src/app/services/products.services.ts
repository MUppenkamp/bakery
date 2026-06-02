import { computed, Injectable, signal } from '@angular/core';
import { Product, ProductTag } from '../types/product.types';

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
      tags: [ProductTag.Bread, ProductTag.Vegan],
      category: 'Brot',
    },
    {
      id: '2',
      name: 'Hefe-Dinkelbrot',
      description:
        'Mein OG Brot, das ich schon seit Jahren backe und das immer super ankommt. Es ist ein sehr saftiges Brot mit einer knusprigen Kruste und einem tollen Geschmack.',
      price: 4,
      imageUrl: '/bread-and-cake.jpg',
      tags: [ProductTag.Bread, ProductTag.Vegan],
      category: 'Brot',
    },
    {
      id: '3',
      name: 'Hefe-Dinkelbrot',
      description:
        'Mein OG Brot, das ich schon seit Jahren backe und das immer super ankommt. Es ist ein sehr saftiges Brot mit einer knusprigen Kruste und einem tollen Geschmack.',
      price: 4,
      imageUrl: '/bread-and-cake.jpg',
      tags: [ProductTag.Bread, ProductTag.Vegan],
      category: 'Brot',
    },
    {
      id: '4',
      name: 'Hefe-Dinkelbrot',
      description:
        'Mein OG Brot, das ich schon seit Jahren backe und das immer super ankommt. Es ist ein sehr saftiges Brot mit einer knusprigen Kruste und einem tollen Geschmack.',
      price: 4,
      imageUrl: '/bread-and-cake.jpg',
      tags: [ProductTag.Bread, ProductTag.Vegan],
      category: 'Kuchen',
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
   * Contains the products grouped by category. The key is the category and the value is an array of products in that category.
   */
  public productsByCategory$ = computed<Map<string, Product[]>>(() => {
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
