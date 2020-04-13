import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  headerOptionSelected = headerOption.recipes;

  onHeaderOptionSelected(option: string) {
    this.headerOptionSelected = headerOption[option as keyof typeof headerOption];
  }

  recipesSelected() {
    return this.headerOptionSelected === headerOption.recipes;
  }

  shoppingListSelected() {
    return this.headerOptionSelected === headerOption.shoppingList;
  }

}

enum headerOption {
  'recipes',
  'shoppingList'
}
