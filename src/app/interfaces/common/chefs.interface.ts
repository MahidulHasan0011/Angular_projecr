import {ShopObject} from './shop-information.interface';

export interface Chefs {
  _id?: string;
  readOnly?: boolean;
  name?: string;
  description?: string;
  image?: string;
  socialLinks: ShopObject[];
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
}
