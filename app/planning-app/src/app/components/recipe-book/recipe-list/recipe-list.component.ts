import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeDelegate = new EventEmitter<Recipe>();

  recipies: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://preview.redd.it/rrb38qds4eo81.jpg?auto=webp&s=dd333ce32b52035f7d3184e5b4370b3d60cbcec0'
    ),
    new Recipe(
      'A test recipe 2',
      'This is simply a test',
      'https://preview.redd.it/rrb38qds4eo81.jpg?auto=webp&s=dd333ce32b52035f7d3184e5b4370b3d60cbcec0'
    ),
    new Recipe(
      'A test recipe 3',
      'This is simply a test',
      'https://preview.redd.it/rrb38qds4eo81.jpg?auto=webp&s=dd333ce32b52035f7d3184e5b4370b3d60cbcec0'
    )
  ]

  constructor() { }

  ngOnInit(): void {}

  /**
   * Has Recipes?
   *
   * Funk to check our dictionary of Recipes and see if it is empty or not.
   *
   * @returns {boolean} If true, we have Recipes. If false, we don't have any.
   */
  hasRecipes = (): boolean => {
    return this.recipies.length > 0 ? true : false;
  }

  /**
   * Selected Recipe
   *
   * This function captures the selected recipe from the clild component's
   * "selected recipe delegate." We will pass the selected recipe back to the
   * main recipe book component.
   *
   * @param {Recipe} targetRecipe The selected recipe's data
   * @returns {void}
   */
  selectedRecipe(targetRecipe: Recipe): void {
    this.selectedRecipeDelegate.emit(targetRecipe);
  }
}
