import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addShoppingListItemDelegate = new EventEmitter<Ingredient>();

  shoppingListErrorMessage: Array<string> = []

  constructor() {}

  ngOnInit(): void {}

  /**
   * Add Ingredient
   *
   * Method used to validate input values and then pass new item to
   * "Add shopping list item delegate."
   *
   * @returns {void}
   */
  addIngredient(): void {
    this.shoppingListErrorMessage = [];

    if (this.nameInput.nativeElement.value === undefined || this.nameInput.nativeElement.value === '') {
      this.shoppingListErrorMessage.push('Name input is required.');
    }

    if (this.amountInput.nativeElement.value === undefined || this.amountInput.nativeElement.value === '') {
      this.shoppingListErrorMessage.push('Amount is required');
    }

    if (this.shoppingListErrorMessage.length > 0) {
      return;
    }

    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.addShoppingListItemDelegate.emit(newIngredient)

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
