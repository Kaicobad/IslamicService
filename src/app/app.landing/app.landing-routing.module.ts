import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app.home/app.home.component';
import { AppLeaderboardComponent } from './app.leaderboard/app.leaderboard.component';
import { AppProfileComponent } from './app.profile/app.profile.component';

const routes: Routes = 
[
  {
    path:"home", 
    component:AppHomeComponent
  },
  {
    path:"leaderboard",
    component:AppLeaderboardComponent
  },
  {
    path:"profile",
    component:AppProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLandingRoutingModule { }
