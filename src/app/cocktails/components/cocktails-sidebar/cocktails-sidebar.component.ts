import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, forkJoin, Subject } from 'rxjs';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktails-sidebar',
  templateUrl: './cocktails-sidebar.component.html',
  styleUrls: ['./cocktails-sidebar.component.scss']
})
export class CocktailsSidebarComponent implements OnInit {
  categoryList: any = [];
  filters = [
    { name: 'Category', key: 'strCategory', is_expand: true, keySort: 'c' },
    { name: 'Glasses', key: 'strGlass', is_expand: false, keySort: 'g' },
    { name: 'Ingredient', key: 'strIngredient1', is_expand: false, keySort: 'i' },
    { name: 'Alcoholic', key: 'strAlcoholic', is_expand: false, keySort: 'a' }
  ];
  constructor(
    private _cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    forkJoin([
      this._cocktailService.getCategories(),
      this._cocktailService.getGlasses(),
      this._cocktailService.getIngredients(),
      this._cocktailService.getAlcoholic()
    ])
    .subscribe((res) => {
      this.categoryList = res;
    });
  }

  expandCollapse(elem: any) {
    elem.is_expand = !elem.is_expand;
  }

  filterCocktails(param: any, filters: any) {
    param.active = !param.active; // For active status on ui
    let _a = this._cocktailService.slectedFilters$.getValue();
    // Object for filter url params
    let _b = { 
      "value": param[filters.key], 
      "key": filters.keySort 
    }
    var index = _a.findIndex((x: any) => x.value === _b.value);
    if (param.active) _a.push(_b)
    else _a.splice(index, 1);

    this._cocktailService.slectedFilters$.next(_a);
  }

}
