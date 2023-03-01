import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"landing",
    loadChildren : ()=> import('./app.landing/app.landing.module').then(x=> x.AppLandingModule)
  },
  // {
  //   path:'',
  //   component:AppLoginComponet
  // } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
