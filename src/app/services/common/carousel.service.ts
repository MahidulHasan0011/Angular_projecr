import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Carousel} from '../../interfaces/common/carousel.interface';
import {FilterData} from '../../interfaces/core/filter-data';

const API_CAROUSEL = environment.apiBaseLink + '/api/carousel/';


@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllCarousels
   */

  getAllCarousels(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Carousel[], count: number, success: boolean }>(API_CAROUSEL + 'get-all', filterData, {params});
  }


}
