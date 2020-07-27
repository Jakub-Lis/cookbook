import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RecipeInterface } from '../recipesInterfase/database';
import { HttpService } from '../recipesInterfase/service.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent{
@Output()
showForm = false;

id: RecipeInterface;
newRecipe: RecipeInterface = {
  title: '',
  poster: '',
  category: '',
  time: '',
  ingridiens: '',
  desc: '',
};
constructor(private http: HttpService, private router: Router) {}




addRecipe(): void
{
  this.http.postRecipe(this.newRecipe).subscribe();
  this.newRecipe = {
    title: '',
    poster: '',
    category: '',
    time: '',
    ingridiens: '',
    desc: '',
  };
}

goToRecipes(): void {
  this.router.navigate(['/']);
}

}
