# Routing

So far, we have a couple of components in the same page, we could have each component on different 'pages' ( strictly we still have a single page application but we can give the ilusion of multiple pages using routing)

This is achieved by reading the url of the browser and render different components based on that url

One of the best practices is to define a new module to handle the routing

See app-routing.module.ts
```
// NgModule to define this file as a module
import { NgModule } from "@angular/core";  
// RouterModule and Routes to inject the needed objects to define our routes
import { RouterModule, Routes } from "@angular/router";

// Components to use in our routes
import { PageNotFoundComponent } from "./components/navigation/page-not-found/page-not-found.component";
import { RecipeDetailsComponent } from "./components/recipes-book/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./components/recipes-book/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./components/recipes-book/recipe-start/recipe-start.component";
import { RecipesBookComponent } from "./components/recipes-book/recipes-book.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

// The actual routes definition
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

// How we convert a simple class into a module
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {};
```
### ToDo
Define the multiple routes and explain how we use the default route child routes and redirects.
