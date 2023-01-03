import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ResponsePayload} from '../../interfaces/core/response-payload.interface';
import {FilterData} from '../../interfaces/core/filter-data';
import {OurStory} from '../../interfaces/common/our-story.interface';

const API_OUR_STORY = environment.apiBaseLink + '/api/our-story/';


@Injectable({
  providedIn: 'root'
})
export class OurStoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllOurStorys
   */

  getAllOurStorys(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: OurStory[], count: number, success: boolean }>(API_OUR_STORY + 'get-all', filterData, {params});
  }
}
