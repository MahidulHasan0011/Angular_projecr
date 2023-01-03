import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FilterData} from '../../interfaces/core/filter-data';
import {RecipeCategory} from '../../interfaces/common/recipe-category.interface';

const API_RECIPES_CATEGORY = environment.apiBaseLink + '/api/recipe-category/';


@Injectable({
  providedIn: 'root'
})
export class RecipeCategoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllRecipeCategories()
   */

  getAllRecipeCategories(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: RecipeCategory[], count: number, success: boolean }>(API_RECIPES_CATEGORY + 'get-all', filterData, {params});
  }


}
