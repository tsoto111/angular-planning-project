import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  activeRecipe: Recipe

  constructor() {}
  ngOnInit(): void {}

  /**
   * Selected Recipe
   *
   * Captures the selected recipe's data sent from the recipe-item component which
   * gets passed all the way to this parent component via event emiter delegates.
   *
   * @param   {Recipe} targetRecipe The selected recipe's data
   * @returns {void}
   */
  selectedRecipe(targetRecipe: Recipe): void {
    this.activeRecipe = targetRecipe;
  }
}
