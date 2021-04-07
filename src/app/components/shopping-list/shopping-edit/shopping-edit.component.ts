import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [
        './shopping-edit.component.scss',
        '../../../styles/buttons.scss',
        '../../../styles/element-colors.scss',
        '../../../styles/globas.scss']
})
export class ShoppingEditComponent implements OnInit {
  // ingredient: string;
  // amount: number;
  @ViewChild('amountInput', { static: false }) amount: ElementRef

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient( name: HTMLInputElement ) {
    this.slService.addIngredient(new Ingredient(name.value, this.amount.nativeElement.value))
  }

}
