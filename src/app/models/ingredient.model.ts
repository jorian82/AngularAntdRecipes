export class Ingredient {
  /*******************************
   * There's a shorter way of binding all this elements, by simply adding to the constructor parameters the word public
   * behind the scenes the constructor will create the fields for the element and assign the values sent to them
   */
  /*
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
  */
  constructor(public name: string, public amount: number) {}
}
