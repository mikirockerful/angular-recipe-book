import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Test title',
      'Test description',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eggplant_Turnovers%2C_Tomato_Rice%2C_Lentils_and_Saffron_Rice_at_Moroccan_Soup_Bar.jpg/1280px-Eggplant_Turnovers%2C_Tomato_Rice%2C_Lentils_and_Saffron_Rice_at_Moroccan_Soup_Bar.jpg'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
