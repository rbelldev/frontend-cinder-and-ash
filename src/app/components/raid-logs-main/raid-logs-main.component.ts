import {Component, OnInit} from '@angular/core';
import {WarcraftLogsService} from "../../services/warcraft-logs/warcraft-logs.service";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'raid-logs-main',
  templateUrl: 'raid-logs-main.component.html',
  styleUrls: ['raid-logs-main.component.css']
})
export class RaidLogsMainComponent implements OnInit{

  logResults: ReportMeta[];
  latestLog: ReportMeta;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let allResults = this.route.snapshot.data['logResults'];
    this.latestLog = allResults.shift();
    this.logResults = allResults;
  }

  navigateToWoWAnalyzer(id:string){
    window.open(`https://wowanalyzer.com/report/${id}`,'_blank')
  }

  navigateToWarcraftLogs(id:string){
    window.open(`https://www.warcraftlogs.com/reports/${id}`,'_blank')
  }

}
