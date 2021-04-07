import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./components/navigation/page-not-found/page-not-found.component";
import { RecipeDetailsComponent } from "./components/recipes-book/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./components/recipes-book/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./components/recipes-book/recipe-start/recipe-start.component";
import { RecipesBookComponent } from "./components/recipes-book/recipes-book.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'recipes', component: RecipesBookComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {};
