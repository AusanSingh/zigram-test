import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit, OnDestroy {
  filteredData: Array<any> = [];
  // sub: Subscription;

  constructor(private _cocktailService: CocktailService) { }

  ngOnInit(): void {
    this._cocktailService.slectedFilters$.subscribe(
      (filters: any) => {
        // Prepare params for active filter and call API
        if (filters.length) this.getFilterData(filters)
        else this.filteredData = [];
      }
    )
  }

  getFilterData(list: any) {
    let _p = this._cocktailService.prepareParam(list);
    this._cocktailService.getFilterData(_p)
      .subscribe(
        (d: any) => {
          this.filteredData = d.drinks;
        }
      )
  }

  ngOnDestroy() {
    // this.sele.unscbcribe();
    this._cocktailService.slectedFilters$.next([]);
  }

}
