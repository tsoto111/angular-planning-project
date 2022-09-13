import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]

  constructor() { }

  ngOnInit(): void {}

  /**
   * Add Ingredient
   *
   * Takes in a new ingredient from child shopping-list-edit component and adds it to our
   * ingredents list.
   *
   * @param {Ingredient} newIngredient The new ingredient to be added.
   * @returns {void}
   */
  addIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
  }
}
