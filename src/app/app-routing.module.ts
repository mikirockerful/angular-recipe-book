import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  // {
  //   path: 'recipes', component: RecipesComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {path: '', component: RecipeNotSelectedComponent, pathMatch: 'full'},
  //     {path: 'new', component: RecipeEditComponent},
  //     {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
  //     {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
  //   ]
  // },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
