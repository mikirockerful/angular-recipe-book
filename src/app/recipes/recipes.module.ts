import {NgModule} from '@angular/core';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipesComponent} from './recipes.component';
import {RecipeNotSelectedComponent} from './recipe-not-selected/recipe-not-selected.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeNotSelectedComponent,
  ],
  imports: [
    RecipesRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
})
export class RecipesModule {

}
