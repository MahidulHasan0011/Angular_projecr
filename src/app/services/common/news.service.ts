import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {News} from '../../interfaces/common/news.interface';
import {FilterData} from '../../interfaces/core/filter-data';

const API_RECIPES = environment.apiBaseLink + '/api/news/';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllNewss()
   * getNewsById()
   */

  getAllNewss(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: News[], count: number, success: boolean }>(API_RECIPES + 'get-all', filterData, {params});
  }

  getNewsById(id: string, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: News, message: string, success: boolean }>(API_RECIPES + id, {params});
  }


}
