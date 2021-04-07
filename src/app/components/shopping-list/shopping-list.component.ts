import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.onIngredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        // console.log('Ingredients updated successfully: ', ...this.ingredients);
      }
    );
  }

}
