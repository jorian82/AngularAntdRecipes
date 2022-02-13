import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Recipe } from "../models/recipe.model";
import { Ingredient } from '../models/ingredient.model';

import { ShoppingListService } from '../services/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('202103051200', 'Tasty Schitzel', 'A super tasty Schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1280px-Wiener-Schnitzel02.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('Potatoes', 2)
    ]),
    new Recipe('202103051300', 'Big Fat Burger', 'No introduction required!!!', 'https://th.bing.com/th/id/OIP.hf6Z6R7ZqnzkkFj6TTyxbwHaE8?pid=ImgDet&rs=1', [
      new Ingredient('Buns', 1),
      new Ingredient('Meat 1/4 kilo', 1),
      new Ingredient('Letuce', 2),
      new Ingredient('Pickles', 5),
      new Ingredient('Bacon slices', 4)
    ])
  ];

  constructor( private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList( ingredients: Ingredient[] ) {
    this.slService.addIngredients(ingredients);
    // console.log('New shopping list: ', ...this.slService.getIngredients())
  }

  getRecipe( id: number ) : Recipe {
    return this.recipes[id]
  }

}
