import { Ingredient } from "./ingredient.model";

export class Recipe {
  public _id: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public difficulty: string;
  public servings: number;
  public preparationTime: number;
  public process: string;
  public origin: string;

  constructor(_id: string, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
