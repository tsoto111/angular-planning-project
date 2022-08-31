import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() imagePath: string;

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
    return this.imagePath || this.imagePath.length !== 0 ? true : false;
  }
}
