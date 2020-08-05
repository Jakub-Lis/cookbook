import { Observable, combineLatest } from 'rxjs';
import { HttpService } from 'src/app/recipesInterfase/service.service';
import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from 'src/app/recipesInterfase/database';
import { ParamMap, ActivatedRoute,  } from '@angular/router';
import { switchMap, startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipes-in-categories',
  templateUrl: './recipes-in-categories.component.html',
  styleUrls: ['./recipes-in-categories.component.css']
})
export class RecipesInCategoriesComponent implements OnInit {

  constructor(private http: HttpService, private route: ActivatedRoute) { }
  recipesInCategories$: Observable<RecipeInterface[]>;
  filteredRecipes$: Observable<RecipeInterface[]>;
  filter: FormControl;
  filter$: Observable<string>;

  ngOnInit(): void {
    this.recipesInCategories$ = this.route.paramMap.pipe(
      switchMap((category: ParamMap) => this.http.getRecipesFromCategory(category.get('category'))));
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredRecipes$ = combineLatest(this.recipesInCategories$, this.filter$).pipe(
      map(([recipes, filterString]) => recipes.filter(recipe => recipe.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)));
  }
}
