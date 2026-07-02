export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  costPrice: number;
  imageUrl?: string;
  tags: ProductTag[];
  category: 'Brot' | 'Kuchen' | 'Gebäck';
  isFavorite?: boolean;
  options?: ProductOption[];
};

/**
 * Additional option to choose from
 */
export type ProductOption = {
  id: string;
  name: string;
  description?: string;
  extraCharge: number;
};

/**
 * Enum representing the tags that can be associated with a product. These tags can be used for categorization and filtering of products in the application.
 */
export enum ProductTag {
  Bread,
  Cake,
  Pastry,
  Vegetarian,
  Vegan,
  Gluten,
  GlutenFree,
  Sourdough,
  Yeast
}
