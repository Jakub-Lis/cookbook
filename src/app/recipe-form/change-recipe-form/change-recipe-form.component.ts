import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeInterface } from 'src/app/recipesInterfase/database';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/recipesInterfase/service.service';

@Component({
  selector: 'app-change-recipe-form',
  templateUrl: './change-recipe-form.component.html',
  styleUrls: ['./change-recipe-form.component.css']
})
export class ChangeRecipeFormComponent implements OnInit {

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  id: Observable<RecipeInterface>;
  Recipe: Partial<RecipeInterface> = {
    id: '',
    title: '',
    poster: '',
    category: '',
    time: '',
    ingridiens: [],
    desc: '',
  };

  ngOnInit(): void {
    this.id = this.route.paramMap.pipe(
      switchMap((id: ParamMap) => this.http.getRecipe(id.get('id')))
     );
  }
  changeRecipe(): void
{
  this.http.changeRecipe(this.Recipe).subscribe();
  this.Recipe = {
    title: '',
    poster: '',
    category: '',
    time: '',
    ingridiens: [],
    desc: '',
  };
}

}
