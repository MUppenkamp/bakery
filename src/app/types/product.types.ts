export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  tags: ProductTag[];
  category: 'Brot' | 'Kuchen' | 'Gebäck';
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
}
