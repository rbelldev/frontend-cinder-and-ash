import {Component, OnInit} from '@angular/core';
import {WarcraftLogsService} from "../../services/warcraft-logs/warcraft-logs.service";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";

@Component({
  selector: 'raid-logs-main',
  templateUrl: 'raid-logs-main.component.html',
  styleUrls: ['raid-logs-main.component.css'],
  providers: [WarcraftLogsService]
})
export class RaidLogsMainComponent {

  logResults: ReportMeta[] = [];

  constructor(private warcraftLogsService: WarcraftLogsService){ }

  retrieveLogs() {
    this.warcraftLogsService.getLogs().first().subscribe( (reportMetas) => {
      this.logResults = reportMetas;
    });
  }

}
