import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Store} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';
import {AddIngredients} from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private activeRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private store: Store<{shoppingList: { ingredients: Ingredient[] }}>
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
