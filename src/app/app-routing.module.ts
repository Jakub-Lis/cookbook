import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipesInCategoriesComponent } from './categories/recipes-in-categories/recipes-in-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'kategorie', component: CategoriesComponent},
  {path: 'kategorie/:category', component: RecipesInCategoriesComponent},
  {path: 'dodanie-przepisu', component: RecipeFormComponent},
  {path: 'przepis/:id', component: RecipesDetailsComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}

