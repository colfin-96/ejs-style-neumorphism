import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './controls/button/button.component';
import { ButtonMaterialComponent } from './controls/button-material/button-material.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, ButtonMaterialComponent],
  imports: [ButtonModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
