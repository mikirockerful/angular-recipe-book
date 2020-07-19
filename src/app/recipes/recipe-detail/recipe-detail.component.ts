import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Store} from '@ngrx/store';
import {AddIngredients} from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipe(Number(params.id));
      }
    );
  }

  ingredientsToShoppingList() {
    this.store.dispatch(new AddIngredients(this.recipe.ingredients));
  }

  onEditSelected() {
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
  }

  onDeleteSelected() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
 }
}
