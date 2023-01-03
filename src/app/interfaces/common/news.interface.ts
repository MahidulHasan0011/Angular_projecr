export interface News {
  _id?: string;
  title: string;
  slug: string;
  image?: string;
  shortDescription?: string;
  description?: string;
  select?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
