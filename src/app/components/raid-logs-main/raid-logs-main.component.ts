import {Component, OnInit} from '@angular/core';
import {WarcraftLogsService} from "../../services/warcraft-logs/warcraft-logs.service";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'raid-logs-main',
  templateUrl: 'raid-logs-main.component.html',
  styleUrls: ['raid-logs-main.component.css']
})
export class RaidLogsMainComponent implements OnInit{

  logResults: ReportMeta[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.logResults = this.route.snapshot.data['logResults'];
  }

}
