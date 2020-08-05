import { Component, Output, OnInit } from '@angular/core';
import { RecipeInterface } from '../recipesInterfase/database';
import { HttpService } from '../recipesInterfase/service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit{

  constructor(private http: HttpService, private router: Router, private recipeForm: FormBuilder) {}

@Output()
showForm = false;

recipe: FormGroup;
newRecipe: RecipeInterface;

ngOnInit(): void {
  this.recipe = this.recipeForm.group({
    title: '',
    poster: '',
    category: '',
    time: '',
    ingridiens: this.recipeForm.array([this.createItem()]),
    desc: ''

  });
}

createItem(): any {
  return this.recipeForm.group({
    name: '',
  });
}

addNext(): void {
  (this.recipe.controls.ingridiens as FormArray).push(this.createItem());

}

addRecipe(): void
{
  this.newRecipe = this.recipe.value;
  this.http.postRecipe(this.newRecipe).subscribe();

}

goToRecipes(): void {
  this.router.navigate(['/']);
}


submit(): void{

  this.newRecipe = this.recipe.value;
  console.log(this.newRecipe);
}


}
