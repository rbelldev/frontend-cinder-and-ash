import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";

@Injectable()
export class WarcraftLogsService {

  PUBLIC_KEY: string  = '574bfcada6ed1ad1460bfe16ebd1de78';
  PRIVATE_KEY: string  = '6fb82f9f926459f46ac895a992ffba27';

  constructor(private http: Http){ }

  getGuildLogList():Observable<ReportMeta[]> {

    let guildName = 'cinder%20and%20ash';
    let serverName = `chogall`;
    let serverRegion = 'us';

    const apiUrl = `https://www.warcraftlogs.com:443/v1/reports/guild/${guildName}/${serverName}/${serverRegion}?api_key=${this.PUBLIC_KEY}`;

    let flatMap = this.http.get(apiUrl).flatMap(response => {
      let allRaidLogs = this.mapRaidLogs(response);

      let guildName = 'cinder%20and%20ash';
      let serverName = `malganis`;
      let serverRegion = 'us';

      const apiUrl = `https://www.warcraftlogs.com:443/v1/reports/guild/${guildName}/${serverName}/${serverRegion}?api_key=${this.PUBLIC_KEY}`;

      let map = this.http.get(apiUrl).map(response => {
        allRaidLogs = allRaidLogs.concat(this.mapRaidLogs(response));
        return allRaidLogs.sort(this.sortRaidLogs);
      });

      return map
    });

    return flatMap;
  };

  mapRaidLogs(response:Response) : ReportMeta[]{

    const json = response.json();
    let reportMetaArray = [];

    for (let obj of json){
      reportMetaArray.push(new ReportMeta(obj));
    }

    return reportMetaArray;

  }

  sortRaidLogs(meta1, meta2){
    if (meta1.start > meta2.start) {
      return -1;
    }

    if (meta1.start < meta2.start) {
      return 1;
    }

    return 0;
  };

  getLog(reportId:string):Observable<any> {
    const apiUrl = `https://www.warcraftlogs.com:443/v1/report/fights/${reportId}?api_key=${this.PUBLIC_KEY}`;

    return this.http.get(apiUrl).map(
      response => {
        return response.json();
      });
  };

}
