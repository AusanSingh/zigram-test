import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  slectedFilters$ = new BehaviorSubject<any>([]);

  constructor(
    private _http: HttpClient
  ) { }

  getCategories() {
    return this._http.get(`${environment.api_url}/list.php?c=list`);
  }

  getGlasses() {
    return this._http.get(`${environment.api_url}/list.php?g=list`);
  }

  getIngredients() {
    return this._http.get(`${environment.api_url}/list.php?i=list`);
  }

  getAlcoholic() {
    return this._http.get(`${environment.api_url}/list.php?a=list`);
  }

  getFilterData(params: any) {
    return this._http.get(`${environment.api_url}/filter.php?${params}`);
  }

  getDrinkDetails(id: any) {
    return this._http.get(`${environment.api_url}/lookup.php?i=${id}`);
  }

  searchCocktails(query: string) {
    return this._http.get(`${environment.api_url}/search.php?s=${query}`);
  }

  prepareParam(filters: any) {
    let p: Array<any> = [];
    filters.forEach((element: any) => {
      p.push(`${element.key}=${element.value}`);
    });
    return p.join('&');
  }
}
