import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";
import {RaidLogSorter} from "./raid-log-sorter";

@Injectable()
export class WarcraftLogsService {

  PUBLIC_KEY: string  = '574bfcada6ed1ad1460bfe16ebd1de78';
  PRIVATE_KEY: string  = '6fb82f9f926459f46ac895a992ffba27';

  constructor(private http: Http, private sorter: RaidLogSorter){ }

  getGuildLogList():Observable<ReportMeta[]> {

    const baseURL = 'https://www.warcraftlogs.com:443/v1/reports/guild';
    const guildName = 'cinder%20and%20ash';
    const serverName = `malganis`;
    const serverRegion = 'us';

    const apiUrl = `${baseURL}/${guildName}/${serverName}/${serverRegion}?api_key=${this.PUBLIC_KEY}`;

    return this.http.get(apiUrl).map(response => {
      return WarcraftLogsService.mapRaidLogs(response).sort(this.sorter.sortByDate);
    });
  };

  getLog(reportId:string):Observable<any> {
    const apiUrl = `https://www.warcraftlogs.com:443/v1/report/fights/${reportId}?api_key=${this.PUBLIC_KEY}`;

    return this.http.get(apiUrl).map(
      response => {
        return response.json();
      });
  };


  static mapRaidLogs(response:Response) : ReportMeta[]{
    const json = response.json();
    let reportMetaArray = [];

    for (let obj of json){
      reportMetaArray.push(new ReportMeta(obj));
    }

    return reportMetaArray;

  }

}
