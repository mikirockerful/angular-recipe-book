import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Lentils',
      'Lentils with puerro',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eggplant_Turnovers' +
      '%2C_Tomato_Rice%2C_Lentils_and_Saffron_Rice_at_Moroccan_Soup_Bar.jpg/1280px-Eggplant_Turnovers%2C_Tomato_Rice' +
      '%2C_Lentils_and_Saffron_Rice_at_Moroccan_Soup_Bar.jpg',
      [
        new Ingredient('Lentils', 20),
        new Ingredient('Puerro', 3)
      ]
    ),
    new Recipe(
      'Pizza',
      'Margherita pizza',
      'https://i-ticketing.iwos.com/256x256-th/products/221/products_221_17.jpg',
      [
        new Ingredient('Cheese', 2),
        new Ingredient('Bread', 1),
        new Ingredient('Tomato', 2)
      ]
    )
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

}
