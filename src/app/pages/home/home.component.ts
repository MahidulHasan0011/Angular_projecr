import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ScrollCntrlService} from 'src/app/services/core/scroll-cntrl.service';
import SwiperCore, {A11y, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper';
import {Carousel} from '../../interfaces/common/carousel.interface';
import {CarouselService} from '../../services/common/carousel.service';
import {FilterData} from '../../interfaces/core/filter-data';
import { UpcomingEvent } from 'src/app/interfaces/upcoming-event';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  upcomingevent: UpcomingEvent[] = [
    {
      _id: '1',
      image: './assets/home/chicken.png',
      title: 'Chicken and Cashews',
      date:"18 Mar 2016",
     discription:"Lorem ipsum dolor sit amet, consectetur piscing elit. Vestibulum dapibus vehiculdum. estibulum a felis ac sem hendrerit mattis...",
     button:"Read More"
    },
    {
      _id: '2',
      image: './assets/home/tomato.png',
      title: 'Chicken and Cashews',
      date:"18 Mar 2016",
      discription:"Lorem ipsum dolor sit amet, consectetur piscing elit. Vestibulum dapibus vehiculdum. estibulum a felis ac sem hendrerit mattis...",
      button:"Read More"
    },
    {
      _id: '3',
      image: './assets/home/roti.jpg',
      title: 'Chicken and Cashews',
      date:"18 Mar 2016",
      discription:"Lorem ipsum dolor sit amet, consectetur piscing elit. Vestibulum dapibus vehiculdum. estibulum a felis ac sem hendrerit mattis...",
      button:"Read More"
    },
    {
      _id: '4',
      image: './assets/home/chicken.png',
      title: 'Chicken and Cashews',
      date:"18 Mar 2016",
     discription:"Lorem ipsum dolor sit amet, consectetur piscing elit. Vestibulum dapibus vehiculdum. estibulum a felis ac sem hendrerit mattis...",
     button:"Read More"
    },
    {
      _id: '5',
      image: './assets/home/tomato.png',
      title: 'Chicken and Cashews',
      date:"18 Mar 2016",
      discription:"Lorem ipsum dolor sit amet, consectetur piscing elit. Vestibulum dapibus vehiculdum. estibulum a felis ac sem hendrerit mattis...",
      button:"Read More"
    },
    {
      _id: '6',
      image: './assets/home/roti.jpg',
      title: 'Chicken and Cashews',
      date:"18 Mar 2016",
      discription:"Lorem ipsum dolor sit amet, consectetur piscing elit. Vestibulum dapibus vehiculdum. estibulum a felis ac sem hendrerit mattis...",
      button:"Read More"
    },

  ]
  @ViewChild('home') homeArea!: ElementRef;

  // Store Data
  carousels: Carousel[] = [];

  // Subscriptions
  private subDataOne: Subscription;
  private subReload: Subscription;


  constructor(
    private carouselService: CarouselService,
    private scrollCntrl: ScrollCntrlService
  ) {
  }

  ngOnInit(): void {

    this.scrollCntrl.refreshHome$.subscribe(() => {
      this.onScrollHome();
    });

    this.getAllCarousels();
  }

  /**
   * HTTP REQ HANDLE
   * getAllCarousels()
   */

  private getAllCarousels() {

    // Select Change Required
    const mSelect = {
      title: 1,
      styleTitle: 1,
      btnTitle: 1,
      image: 1,
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: {createdAt: -1}
    }


    this.subDataOne = this.carouselService.getAllCarousels(filterData, null)
      .subscribe(res => {
        if (res.success) {
          this.carousels = res.data;
        }
      }, error => {
        console.log(error);
      });
  }

  /**
   * ON SCROLL
   */
  onScrollHome() {
    this.homeArea.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * ON DESTROY
   */
  ngOnDestroy(): void {
    if (this.subReload) {
      this.subReload.unsubscribe();
    }
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }

}
