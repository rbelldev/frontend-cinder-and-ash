import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";

@Injectable()
export class WarcraftLogsService {

  PUBLIC_KEY: string  = '574bfcada6ed1ad1460bfe16ebd1de78';
  PRIVATE_KEY: string  = '6fb82f9f926459f46ac895a992ffba27';

  constructor(private http: Http){ }

  getLogs():Observable<ReportMeta[]> {
    let userName = 'robbell5';
    const apiUrl = `https://www.warcraftlogs.com:443/v1/reports/user/${userName}?api_key=${this.PUBLIC_KEY}`;

    return this.http.get(apiUrl).map(
      response => {
        const json = response.json();
        let reportMetaArray = [];

        for (let obj of json){
          reportMetaArray.push(new ReportMeta(obj));
        }

        return json
      });
  };

}
