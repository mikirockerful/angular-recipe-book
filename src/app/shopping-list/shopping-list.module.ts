import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list-edit/shopping-list-edit.component';
import {FormsModule} from '@angular/forms';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {
}
