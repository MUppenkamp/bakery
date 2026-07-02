import { Product, ProductTag } from '../types/product.types';

/**
 * Current products to buy
 */
export const products: Product[] = [
  {
    id: '1',
    name: 'Hefe-Dinkelbrot',
    price: 3.5,
    costPrice: 1.5,
    imageUrl: '/products/hefe-dinkelbrot.webp',
    tags: [ProductTag.Bread, ProductTag.Gluten, ProductTag.Vegan, ProductTag.Yeast],
    category: 'Brot',
    isFavorite: true,
  },
  {
    id: '2',
    name: 'Sauerteig-Dinkelbrot',
    price: 4.5,
    costPrice: 1.5,
    imageUrl: '/products/sauerteig-dinkelbrot.webp',
    tags: [ProductTag.Bread, ProductTag.Gluten, ProductTag.Vegan, ProductTag.Sourdough],
    category: 'Brot',
  },
  {
    id: '3',
    name: 'Dinkel-Baguette',
    price: 2.5,
    costPrice: 1.5,
    imageUrl: '/products/dinkel-baguette.webp',
    tags: [ProductTag.Bread, ProductTag.Gluten, ProductTag.Vegan, ProductTag.Yeast],
    category: 'Brot',
  },
];
