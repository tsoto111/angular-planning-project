import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NavMenuState} from '../../models/navMenuState.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navigationClickDelegate = new EventEmitter <NavMenuState>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Show Nav Link
   *
   * Takes in a target string in order tell our navigation click delegate which
   * content to show in the dom.
   *
   * @param   {string} target The target component we want to show.
   * @returns {void}
   */
  showNavLink(target: string): void {
    let navState: NavMenuState

    switch(target) {
      case 'recipeBook':
        navState = new NavMenuState(false, true)
        break;
      case 'shoppingList':
        navState = new NavMenuState(true, false)
        break;
      default:
        console.warn('WARNING: Show nav link target of ' + target + ' is not supported.');
        break;
    }

    this.navigationClickDelegate.emit(navState);
  }
}
