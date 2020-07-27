import { RecipeInterface } from './../recipesInterfase/database';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpService } from '../recipesInterfase/service.service';

@Component({
  selector: 'app-recipe-cover',
  templateUrl: './recipe-cover.component.html',
  styleUrls: ['./recipe-cover.component.css']
})
export class RecipeCoverComponent{

@Input() recipe: RecipeInterface;

constructor(private http: HttpService) {}

deleteRecipe(): void{
  this.http.deleteRecipe(this.recipe.id).subscribe();
}

}
