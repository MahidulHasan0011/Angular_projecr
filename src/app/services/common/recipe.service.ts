import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Recipe} from '../../interfaces/common/recipe.interface';
import {FilterData} from '../../interfaces/core/filter-data';

const API_RECIPES = environment.apiBaseLink + '/api/recipe/';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * getAllRecipes()
   * getRecipeById()
   */

  getAllRecipes(filterData: FilterData, searchQuery?: string) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Recipe[], count: number, success: boolean }>(API_RECIPES + 'get-all', filterData, {params});
  }

  getRecipeById(id: string, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: Recipe, message: string, success: boolean }>(API_RECIPES + id, {params});
  }


}
