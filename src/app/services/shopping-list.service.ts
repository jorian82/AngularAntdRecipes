import { EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {

  onIngredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Oranges', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientChanged.emit(this.ingredients.slice());
  }

  addIngredients( ingredients: Ingredient[] ) {
    // for ( let item of ingredients ) {
    //   this.addIngredient(item);
    // }
    // console.log('new ingredients to be added: ', ...ingredients);
    this.ingredients.push(...ingredients);
    this.onIngredientChanged.emit(this.ingredients.slice());
  }

}
