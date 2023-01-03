import { ScrollCntrlService } from 'src/app/services/core/scroll-cntrl.service';
import { Subscription } from 'rxjs';
import {Component, OnInit, OnDestroy, ViewChild, ElementRef, Input} from '@angular/core';
import {ShopInformation} from '../../../interfaces/common/shop-information.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnDestroy {
  @Input() shopInformation: ShopInformation;
  @ViewChild('contact') contactArea!:ElementRef;

  public year = new Date().getFullYear();

  private subReload!:Subscription;


  constructor(
    private scrollCntrl:ScrollCntrlService
  ) { }

  ngOnInit(): void {
    this.scrollCntrl.refreshContact$.subscribe(() =>{
      this.onScrollContact();
    })
  }

  onScrollContact(){
    this.contactArea.nativeElement.scrollIntoView({behavior:'smooth'});
  }

  /**
   * GET SOCIAL CLASS
   * getSocialClass()
   */
  getSocialClass(type: number): string {
    switch (type) {
      case 0: {
        return 'fa-brands fa-facebook'
      }
      case 1: {
        return 'fa-brands fa-youtube'
      }
      case 2: {
        return 'fa-brands fa-twitter'
      }
      case 3: {
        return 'fa-brands fa-instagram'
      }
      case 4: {
        return 'fa-brands fa-linkedin-in'
      }
      case 5: {
        return 'fa-brands fa-skype'
      }
      case 6: {
        return 'fa-brands fa-dribbble'
      }
      case 7: {
        return 'fa-brands fa-pinterest'
      }
      case 8: {
        return 'fa-brands fa-behance'
      }
      default: {
        return '';
      }
    }
  }

  ngOnDestroy(): void {
    this.subReload.unsubscribe();
  }

}
