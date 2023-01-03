import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ScrollCntrlService} from 'src/app/services/core/scroll-cntrl.service';
import SwiperCore, {Autoplay, Pagination} from 'swiper';
import {ChefsService} from 'src/app/services/common/chefs.service';
import {FilterData} from 'src/app/interfaces/core/filter-data';
import {Chefs} from '../../interfaces/common/chefs.interface';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @ViewChild('team') teamArea!: ElementRef;

  // Store Data
  chefs: Chefs[] = [];

  // Subscriptions
  private subDataOne: Subscription;
  private subReload: Subscription;


  constructor(
    private chefsService: ChefsService,
    private scrollCntrl: ScrollCntrlService
  ) {
  }

  ngOnInit(): void {

    this.scrollCntrl.refreshTeam$.subscribe(() => {
      this.onScrollTeam();
    })
    this.getAllChefs()

  }


  /**
   * HTTP REQ HANDLE
   * getAllChefs()
   */
  private getAllChefs() {

    // Select Change Required
    const mSelect = {
      name: 1,
      description: 1,
      image: 1,
      socialLinks: 1,
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: {createdAt: -1}
    }


    this.subDataOne = this.chefsService.getAllChefss(filterData, null)
      .subscribe(res => {
        if (res.success) {
          this.chefs = res.data;
        }
      }, error => {
        console.log(error);
      });
  }

  /**
   * ON SCROLL
   */
  onScrollTeam() {
    this.teamArea.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * GET SOCIAL CLASS
   * getSocialClass()
   */
  getSocialClass(type: number): string {
    switch (type) {
      case 0: {
        return 'fa-brands fa-facebook-f'
      }
      case 2: {
        return 'fa-brands fa-twitter'
      }
      case 3: {
        return 'fa-brands fa-instagram'
      }
      case 6: {
        return 'fa-brands fa-dribbble'
      }
      case 8: {
        return 'fa-brands fa-behance'
      }
      default: {
        return '';
      }
    }
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
