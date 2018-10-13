import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainscreenComponent } from './mainScreen/mainscreen/mainscreen.component';

const routes: Routes = [
  { path: '',  component: MainscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
