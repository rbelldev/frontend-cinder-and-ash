import {Component, OnInit} from '@angular/core';
import {WarcraftLogsService} from "../../services/warcraft-logs/warcraft-logs.service";

@Component({
  selector: 'raid-logs-main',
  templateUrl: 'raid-logs-main.component.html',
  styleUrls: ['raid-logs-main.component.css'],
  providers: [WarcraftLogsService]
})
export class RaidLogsMainComponent {

  logResults: string = '';

  constructor(private warcraftLogsService: WarcraftLogsService){ }

  retrieveLogs() {
    this.warcraftLogsService.getLogs().first().subscribe( (json) => {
      this.logResults = JSON.stringify(json);
    });
  }

}
