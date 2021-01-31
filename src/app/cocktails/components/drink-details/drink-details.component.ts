import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {
  sub: any;
  id:number = 0;
  drink: any = '';
  ingredient: any = [];

  constructor(private _cocktailService: CocktailService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(params => {
      this.id = +params['idDrink']; // (+) converts string 'id' to a number

      if(this.id) this.getDrink();
   });
  }

  getDrink() {
    this._cocktailService.getDrinkDetails(this.id)
    .subscribe(
      (d:any)=>{
        this.drink = d.drinks[0];
        let i = [];
        let c = 1;
        while(this.drink[`strIngredient${c}`]) {
          i.push(this.drink[`strIngredient${c}`]);
          c++;  
        }
        this.ingredient = i;
      }
    )
  }

}
