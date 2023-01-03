import { Tag } from './tag.interface';
import { RecipeCategory } from './recipe-category.interface';

export interface Recipe {
  _id?: string;
  name: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  price?: number;
  discountType?: number;
  discountAmount?: number;
  image?: string;
  videoUrl?: string;
  category?: RecipeCategory;
  tag?: Tag;
  select?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
