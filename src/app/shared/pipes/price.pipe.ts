import {Pipe, PipeTransform} from '@angular/core';
import {DiscountTypeEnum} from '../../enum/discount.enum';
import {Recipe} from '../../interfaces/common/recipe.interface';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(product: Recipe, type: string, quantity?: number): number {

    if (product) {
      switch (type) {
        case 'price': {
          if (product.discountType && product.discountType === DiscountTypeEnum.PERCENTAGE) {
            const disPrice = (product?.discountAmount / 100) * product?.price;
            if (quantity) {
              return Math.floor((product?.price - disPrice) * quantity);
            }
            return Math.floor(product?.price - disPrice);
          } else if (product?.discountType && product?.discountType === DiscountTypeEnum.CASH) {
            if (quantity) {
              return Math.floor((product?.price - product.discountAmount) * quantity);
            }
            return Math.floor(product?.price - product.discountAmount);
          } else {
            if (quantity) {
              return Math.floor((product?.price) * quantity);
            }
            return Math.floor(product?.price);
          }
        }
        case 'discountAmount': {
          if (product.discountType === DiscountTypeEnum.PERCENTAGE) {
            if (quantity) {
              return ((product?.discountAmount / 100) * product?.price) * quantity;
            }
            return (product?.discountAmount / 100) * product?.price;
          } else if (product.discountType === DiscountTypeEnum.CASH) {
            if (quantity) {
              return product?.discountAmount * quantity;
            }
            return product?.discountAmount;
          } else {
            return 0;
          }
        }
        case 'discountPercentage': {
          if (product.discountType === DiscountTypeEnum.PERCENTAGE) {
            if (quantity) {
              return product?.discountAmount;
            }
            return product?.discountAmount;
          } else if (product.discountType === DiscountTypeEnum.CASH) {
            if (quantity) {
              return Math.round((product?.discountAmount / product?.price) * 100);
            }
            return Math.round((product?.discountAmount / product?.price) * 100);
          } else {
            return 0;
          }
        }
        case 'regularPrice': {
          if (quantity) {
            return Math.floor(product?.price * quantity);
          }
          return Math.floor(product?.price);
        }
        default: {
          return product?.price;
        }
      }
    } else {
      return 0;
    }

  }

}
