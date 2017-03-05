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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.logResults = this.route.snapshot.data['logResults'];
  }

  navigateToCheckMyWow(id:string){
    window.open(`http://www.checkmywow.com/reports/${id}`,'_blank')
  }

  navigateToWarcraftLogs(id:string){
    window.open(`https://www.warcraftlogs.com/reports/${id}`,'_blank')
  }

}
