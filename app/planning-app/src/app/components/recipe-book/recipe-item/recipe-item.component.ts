import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeData: Recipe;
  @Output() selectRecipeDelegate = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {}

  /**
   * Has Image Path
   *
   * Will tell us if imagePath is set or not.
   *
   * @returns {boolean} True if image is set, false if not.
   */
  hasImagePath(): boolean {
    return this.recipeData.imagePath || this.recipeData.imagePath.length !== 0 ? true : false;
  }

  /**
   * View Recipe
   *
   * This method will emit the recipe we want to show on "View More" button click
   * to the parent component via the "select recipe delegate."
   *
   * @param   {Recipe} targetRecipe The selected recipe we want to show.
   * @returns {void}
   */
  viewRecipe(targetRecipe: Recipe): void {
    this.selectRecipeDelegate.emit(targetRecipe);
  }
}
