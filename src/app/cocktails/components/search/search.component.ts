import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr = 'margarita';
  searchedData: any = [];
  
  constructor( private _cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.search(); // Search Default
  }

  search() {
    this._cocktailService.searchCocktails(this.searchStr)
    .subscribe(
      (d: any)=> {
        this.searchedData = d.drinks;
      }
    )
  }

}
