import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonMaterialComponent } from './controls/button-material/button-material.component';
import { ButtonComponent } from './controls/button/button.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'button-material', component: ButtonMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
