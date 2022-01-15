import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './button.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
