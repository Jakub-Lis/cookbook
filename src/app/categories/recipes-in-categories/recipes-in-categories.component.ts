import { Observable } from 'rxjs';
import { HttpService } from 'src/app/recipesInterfase/service.service';
import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from 'src/app/recipesInterfase/database';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-in-categories',
  templateUrl: './recipes-in-categories.component.html',
  styleUrls: ['./recipes-in-categories.component.css']
})
export class RecipesInCategoriesComponent implements OnInit {

  constructor(private http: HttpService, private route: ActivatedRoute) { }
  recipesInCategories: Observable<RecipeInterface[]>;

  ngOnInit(): void {
    this.recipesInCategories = this.route.paramMap.pipe(
      switchMap((category: ParamMap) => this.http.getRecipesFromCategory(category.get('category')))
    );
  }

}
