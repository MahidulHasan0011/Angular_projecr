import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ShopInformation} from '../interfaces/common/shop-information.interface';
import {ShopInformationService} from '../services/common/shop-information.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  // Store Data
  shopInformation: ShopInformation;

  // Subscriptions
  private subDataOne: Subscription;

  constructor(
    private shopInformationService: ShopInformationService
  ) {
  }

  ngOnInit() {
    this.getShopInformation()
  }

  /**
   * HTTP REQ HANDLE
   * getShopInformation()
   */

  private getShopInformation() {
    const select = 'addresses';

    this.subDataOne = this.shopInformationService.getShopInformation(select)
      .subscribe(res => {
        if (res.success) {
          this.shopInformation = res.data
        }
      }, error => {
        console.log(error);
      });
  }


}
