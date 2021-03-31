import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./navigation/page-not-found/page-not-found.component";
import { RecipesBookComponent } from "./recipes-book/recipes-book.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'recipes', component: RecipesBookComponent },
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
