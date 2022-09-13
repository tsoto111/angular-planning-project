import { Component } from '@angular/core';
import { NavMenuState } from './models/navMenuState.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'planning-app';
  navMenuComponentState: NavMenuState = {shoppingList: false, recipeBook: true}

  handleNavDelegateState(newMenuComponentState: NavMenuState) {
    this.navMenuComponentState = newMenuComponentState;
  }
}
