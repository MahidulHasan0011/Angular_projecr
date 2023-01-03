import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollCntrlService {
  
  private reloadHome= new Subject<void>();
  private reloadOffer= new Subject<void>();
  private reloadAbout= new Subject<void>();
  private reloadMenu= new Subject<void>();
  private reloadTeam= new Subject<void>();
  private reloadBlog= new Subject<void>();
  private reloadGallery= new Subject<void>();
  private reloadContact= new Subject<void>();

  constructor() { }

  /**
   * Refresh Area
   */
    get refreshHome$() {
      return this.reloadHome;
    }
    needRefreshHome$() {
      this.reloadHome.next();
    }
    get refreshAbout$() {
      return this.reloadAbout;
    }
    needRefreshAbout$() {
      this.reloadAbout.next();
    }
    
    get refreshMenu$() {
      return this.reloadMenu;
    }
    needRefreshMenu$() {
      this.reloadMenu.next();
    }

    get refreshTeam$() {
      return this.reloadTeam;
    }
    needRefreshTeam$() {
      this.reloadTeam.next();
    }
    get refreshBlog$() {
      return this.reloadBlog;
    }
    needRefreshBlog$() {
      this.reloadBlog.next();
    }
    get refreshGallery$() {
      return this.reloadGallery;
    }
    needRefreshGallery$() {
      this.reloadGallery.next();
    }
    get refreshContact$() {
      return this.reloadContact;
    }
    needRefreshContact$() {
      this.reloadContact.next();
    }

    get refreshOffer$() {
      return this.reloadOffer;
    }
    needRefreshOffer$() {
      this.reloadOffer.next();
    }

}
