import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Tag} from '../../interfaces/common/tag.interface';
import {FilterData} from '../../interfaces/core/filter-data';

const API_TAG = environment.apiBaseLink + '/api/tag/';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllTags()
   */


  getAllTags(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Tag[], count: number, success: boolean }>(API_TAG + 'get-all', filterData, {params});
  }


}
