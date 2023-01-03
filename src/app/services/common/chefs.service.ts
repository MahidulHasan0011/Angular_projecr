import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ResponsePayload} from '../../interfaces/core/response-payload.interface';
import {Chefs} from '../../interfaces/common/chefs.interface';
import {FilterData} from '../../interfaces/core/filter-data';

const API_CAROUSEL = environment.apiBaseLink + '/api/chefs/';


@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllChefss
   */

  getAllChefss(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Chefs[], count: number, success: boolean }>(API_CAROUSEL + 'get-all', filterData, {params});
  }

}
