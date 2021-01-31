import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CocktailsSidebarComponent } from './components/cocktails-sidebar/cocktails-sidebar.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: ':idDrink',
    component: DrinkDetailsComponent,
    pathMatch: 'full'
  }
  
]


@NgModule({
  declarations: [
    CocktailsComponent,
    CocktailsSidebarComponent,
    SearchComponent,
    DrinkDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [ ]
})
export class CocktailsModule { }
