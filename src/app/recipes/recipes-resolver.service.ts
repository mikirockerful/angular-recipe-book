import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Recipe} from './recipe.model';
import {DataStorageService} from '../shared/data-storage.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipeService} from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    if (this.recipeService.getRecipes().length === 0) {
      return this.dataStorageService.fetchRecipes();
    }
    return this.recipeService.getRecipes();
  }

}
