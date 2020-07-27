import { RecipeInterface } from './../../recipesInterfase/database';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/recipesInterfase/service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  recipeDetail: Observable<RecipeInterface>;

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.recipeDetail = this.route.paramMap.pipe(
      switchMap((id: ParamMap) => this.http.getRecipe(id.get('id')))
    );
  }

  goToRecipes(): void {
    this.router.navigate(['/']);
  }
}
