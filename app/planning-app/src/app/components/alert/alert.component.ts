import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() alertType: String;

  constructor() {}

  ngOnInit(): void {}

  getAlertType() {
    let targetAlertTypeBSClass = 'alert-info';

    switch(this.alertType) {
      case 'danger':
        targetAlertTypeBSClass = 'alert-danger';
        break;
      case 'warning':
        targetAlertTypeBSClass = 'alert-warning';
      case 'success':
        targetAlertTypeBSClass = 'alert-success';
        break;
      default:
        console.warn('WARNING: Alert type of ' + this.alertType + ' is not supported.')
        break;
    }

    return targetAlertTypeBSClass;
  }
}
