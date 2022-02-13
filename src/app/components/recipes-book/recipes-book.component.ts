import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-book',
  templateUrl: './recipes-book.component.html',
  styleUrls: ['./recipes-book.component.scss'],
  providers: [RecipeService]
})
export class RecipesBookComponent implements OnInit {
  private subscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        // this.recipeService.getRecipe()
      }
    )
  }

}
