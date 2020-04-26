import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

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
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.recipe = this.recipeService.get(Number(this.activeRoute.snapshot.params.id));
    this.activeRoute.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.get(Number(params.id));
      }
    );
  }

  ingredientsToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
