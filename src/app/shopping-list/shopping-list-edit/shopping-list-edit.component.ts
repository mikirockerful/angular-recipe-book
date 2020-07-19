import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromShoppingList from '../store/shopping-list.reducer';
import {State} from '../store/shopping-list.reducer';
import * as shoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(
      (stateData: State) => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.slForm.setValue(
            {
              name: this.editedItem.name,
              amount: this.editedItem.amount
            }
          );
        } else {
          this.editMode = false;
        }
      }
    );
  }

  addIngredient(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.store.dispatch(new shoppingListActions.UpdateIngredient(
        newIngredient
      ));
    } else {
      this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.slForm.resetForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new shoppingListActions.StopEdit());
  }

  onClear() {
    this.slForm.resetForm();
    this.editMode = false;
    this.store.dispatch(new shoppingListActions.StopEdit());
  }

  onDelete() {
    if (this.editMode) {
      this.store.dispatch(new shoppingListActions.DeleteIngredient());
      this.editMode = false;
      this.slForm.resetForm();
    }

  }
}
