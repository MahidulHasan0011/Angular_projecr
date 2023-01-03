import {ScrollCntrlService} from '../../services/core/scroll-cntrl.service';
import {Component, HostListener, Input, OnInit} from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {ShopInformation} from '../../interfaces/common/shop-information.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() shopInformation: ShopInformation;

  faEnvelope = faEnvelope;
  sideNav = false;
  fixed = false;
  status: boolean = false;

  selectedUrl = 'home';


  constructor(
    private scrollCntrl: ScrollCntrlService
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * SideNavActive()
   * SideNavInactive()
   * headerFixed()
   */
  @HostListener('window:scroll')
  onWindowScroll() {
    this.fixed = window.scrollY > 20;
  }


  clickEvent() {
    this.status = !this.status;
  }

  sideNavActive() {
    this.sideNav = true;
  }

  sideNavInactive() {
    this.sideNav = false;
  }

  onNavigate(type: string) {
    this.selectedUrl = type;
    switch (type) {
      case 'home':
        this.scrollCntrl.needRefreshHome$();
        break;
      case 'offer':
        this.scrollCntrl.needRefreshOffer$();
        break;
      case 'about':
        this.scrollCntrl.needRefreshAbout$();
        break;
      case 'blog':
        this.scrollCntrl.needRefreshBlog$();
        break;
      case 'menu':
        this.scrollCntrl.needRefreshMenu$();
        break;
      case 'team':
        this.scrollCntrl.needRefreshTeam$();
        break;
      case 'gallery':
        this.scrollCntrl.needRefreshGallery$();
        break;
      case 'contact':
        this.scrollCntrl.needRefreshContact$();
        break;
      default:
        break;

    }

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

}
