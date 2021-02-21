import { Component, Input, OnInit } from '@angular/core';
import { Alert } from './alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class ErrorAlertComponent implements OnInit {

  constructor() {
    this.model = Alert.default; 
  }

  ngOnInit(): void {
  }

  @Input() model: Alert
}
