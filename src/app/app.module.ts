import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

import { RosterMainComponent } from './components/roster-main/roster-main.component';
import { RaidLogsMainComponent } from './components/raid-logs-main/raid-logs-main.component';

import {Routes, RouterModule} from "@angular/router";
import {HomeMainComponent} from './components/home-main/home-main.component';
import {GuildLogListResolver} from "./resolvers/guild-log-list.resolver";
import {WarcraftLogsService} from "./services/warcraft-logs/warcraft-logs.service";
import { LogViewComponent } from './components/log-view/log-view.component';
import {SimulationMainComponent} from './components/simlation-main/simulation-main.component';
import {LogResolver} from "./resolvers/log.resolver";
import {GuildResolver} from "./resolvers/guild.resolver";
import {BattleNetService} from "./services/battle-net/battle-net.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeMainComponent },
  {
    path: 'roster',
    component: RosterMainComponent,
    resolve: {
      guild:GuildResolver
    }
  },
  {
    path: 'raid-logs',
    component: RaidLogsMainComponent,
    resolve: {
      logResults: GuildLogListResolver
    }
  },
  {
    path: 'log/:id',
    component: LogViewComponent,
    resolve: {
      data: LogResolver
    }
  },
    {path: 'simulation',component: SimulationMainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RosterMainComponent,
    RaidLogsMainComponent,
    HomeMainComponent,
    LogViewComponent,
    SimulationMainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WarcraftLogsService,
    BattleNetService,
    GuildLogListResolver,
    GuildResolver,
    LogResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
