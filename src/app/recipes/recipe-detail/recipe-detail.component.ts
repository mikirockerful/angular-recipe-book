import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
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
    private recipeService: RecipeService,
    private router: Router
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
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onEditSelected() {
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
  }

  onDeleteSelected() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
 }
}
