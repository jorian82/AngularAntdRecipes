import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-book',
  templateUrl: './recipes-book.component.html',
  styleUrls: ['./recipes-book.component.scss'],
  providers: [RecipeService]
})
export class RecipesBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
