import { ChangeRecipeFormComponent } from './recipe-form/change-recipe-form/change-recipe-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeCoverComponent } from './recipe-cover/recipe-cover.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesInCategoriesComponent } from './categories/recipes-in-categories/recipes-in-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RecipeFormComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipeCoverComponent,
    CategoriesComponent,
    RecipesInCategoriesComponent,
    ChangeRecipeFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
