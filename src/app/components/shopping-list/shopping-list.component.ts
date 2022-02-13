import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.onIngredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        // console.log('Ingredients updated successfully: ', ...this.ingredients);
      }
    );
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
