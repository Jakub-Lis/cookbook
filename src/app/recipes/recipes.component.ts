import { HttpService } from './../recipesInterfase/service.service';
import { RecipeInterface} from '../recipesInterfase/database';
import { Component, OnInit} from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipeList$: Observable<RecipeInterface[]>;
  filteredRecipes$: Observable<RecipeInterface[]>;
  filter: FormControl;
  filter$: Observable<string>;

  constructor(private http: HttpService) {

  }

   ngOnInit(): void {
    this.recipeList$ = this.http.getRecipes();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredRecipes$ = combineLatest(this.recipeList$, this.filter$).pipe(
      map(([recipes, filterString]) => recipes.filter(recipe => recipe.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }
}
