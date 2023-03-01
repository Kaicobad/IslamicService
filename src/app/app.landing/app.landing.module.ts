import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app.landing-routing.module';
import { AppHomeComponent } from './app.home/app.home.component';
import { AppLeaderboardComponent } from './app.leaderboard/app.leaderboard.component';
import { AppProfileComponent } from './app.profile/app.profile.component';


@NgModule({
  declarations: [
    AppHomeComponent,
    AppLeaderboardComponent,
    AppProfileComponent
  ],
  imports: [
    CommonModule,
    AppLandingRoutingModule
  ]
})
export class AppLandingModule { }
