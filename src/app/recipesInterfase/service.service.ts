import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeInterface } from './database';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:3000/recipes';
   constructor(private httpClient: HttpClient) {}

  getRecipes(): Observable<RecipeInterface[]> {
    return this.httpClient.get<RecipeInterface[]>(this.url);
  }

  getRecipe(id: string): Observable<RecipeInterface> {
    return this.httpClient.get<RecipeInterface>(this.url + '/' + id);
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/categories');
  }

  getRecipesFromCategory(category: string): Observable<RecipeInterface[]> {
    return this.getRecipes().pipe(
      map(recipes => recipes.filter(recipe => recipe.category === category))
    );
  }
  postRecipe(recipe: RecipeInterface): any{
    return this.httpClient.post(this.url, recipe);
  }
  changeRecipe(recipe: Partial<RecipeInterface>): Observable<RecipeInterface>{
    return this.httpClient.patch<RecipeInterface>(this.url + '/' + recipe.id, recipe);
  }
  deleteRecipe(id: string): Observable<{}>
  {
    return this.httpClient.delete<{}>(this.url + '/' + id);
  }
}
