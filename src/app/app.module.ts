import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import 'hammerjs';
import { RosterMainComponent } from './roster-main/roster-main.component';
import { RaidLogsMainComponent } from './raid-logs-main/raid-logs-main.component';

import {Routes, RouterModule} from "@angular/router";
import { HomeMainComponent } from './home-main/home-main.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeMainComponent },
  { path: 'roster', component: RosterMainComponent },
  { path: 'raid-logs',      component: RaidLogsMainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RosterMainComponent,
    RaidLogsMainComponent,
    HomeMainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
