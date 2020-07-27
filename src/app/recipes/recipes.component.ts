import { async } from '@angular/core/testing';

import { HttpService } from './../recipesInterfase/service.service';
import { RecipeInterface} from '../recipesInterfase/database';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  constructor(private http: HttpService) {}

 recipeList: Observable<RecipeInterface[]>;

   ngOnInit(): void {
    this.recipeList = this.http.getRecipes();
  }

}
