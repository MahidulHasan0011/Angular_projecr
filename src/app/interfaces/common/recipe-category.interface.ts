export interface RecipeCategory {
  readOnly?: boolean;
  _id?: string;
  name: string;
  slug?: string;
  select?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
