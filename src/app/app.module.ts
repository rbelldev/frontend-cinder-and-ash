import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {SafePipe} from "./pipes/safe-pipe";
import { CharacterDetailsComponent } from './components/roster-main/character-details/character-details.component';
import {CharacterResolver} from "./resolvers/character.resolver";
import { ItemRowComponent } from './components/roster-main/character-details/item-row/item-row.component';
import { RosterTableComponent } from './components/roster-main/roster-table/roster-table.component';
import {MythicRosterTableComponent} from "./components/roster-main/mythic-roster-table/mythic-roster-table.component";
import { ApplyFormComponent } from './components/apply/apply-form.component';
import { RecruitmentFormComponent } from './components/apply/recruitment-form/recruitment-form.component';
import {CharacterRecruitmentResolver} from "./resolvers/character-recruitment.resolver";
import {CinderAndAshService} from "./services/cinder-and-ash/cinder-and-ash.service";
import {RaidLogSorter} from "./services/warcraft-logs/raid-log-sorter";
import { SpinnerComponent } from './components/spinner/spinner.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeMainComponent
  },
  {
    path: 'roster',
    component: RosterMainComponent
  },
  {
    path: 'raid-logs',
    component: RaidLogsMainComponent,
    resolve: {
      logResults: GuildLogListResolver
    }
  },
  {
    path: 'character/:name',
    component: CharacterDetailsComponent,
    resolve: {
      character: CharacterResolver
    }
  },
    {
      path: 'simulation',
      component: SimulationMainComponent
    },
  {
    path: 'apply',
    component: ApplyFormComponent
  },
  {
    path: 'apply/:realm/:name',
    component: RecruitmentFormComponent,
    resolve: {
      character: CharacterRecruitmentResolver
    }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RosterMainComponent,
    RaidLogsMainComponent,
    HomeMainComponent,
    LogViewComponent,
    SimulationMainComponent,
    SafePipe,
    CharacterDetailsComponent,
    ItemRowComponent,
    RosterTableComponent,
    MythicRosterTableComponent,
    ApplyFormComponent,
    RecruitmentFormComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    WarcraftLogsService,
    BattleNetService,
    GuildLogListResolver,
    GuildResolver,
    LogResolver,
    CharacterResolver,
    CharacterRecruitmentResolver,
    CinderAndAshService,
    RaidLogSorter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
