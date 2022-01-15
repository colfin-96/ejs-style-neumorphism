import { Component, OnInit } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'app-button-material',
  templateUrl: './button-material.component.html',
  styleUrls: ['./button-material.component.scss', './button.scss'],
})
export class ButtonMaterialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
