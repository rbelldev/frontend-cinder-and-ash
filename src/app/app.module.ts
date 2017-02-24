import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

import { RosterMainComponent } from './components/roster-main/roster-main.component';
import { RaidLogsMainComponent } from './components/raid-logs-main/raid-logs-main.component';

import {Routes, RouterModule} from "@angular/router";
import { HomeMainComponent } from './components/home-main/home-main.component';
import {ReportMetaListResolver} from "./resolvers/report-meta-list.resolver";
import {WarcraftLogsService} from "./services/warcraft-logs/warcraft-logs.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeMainComponent },
  { path: 'roster', component: RosterMainComponent },
  {
    path: 'raid-logs',
    component: RaidLogsMainComponent,
    resolve: {
      logResults: ReportMetaListResolver
    }
  }
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
    HttpModule
  ],
  providers: [
    WarcraftLogsService,
    ReportMetaListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
