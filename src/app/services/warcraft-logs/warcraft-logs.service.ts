import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class WarcraftLogsService {

  PUBLIC_KEY: string  = '574bfcada6ed1ad1460bfe16ebd1de78';
  PRIVATE_KEY: string  = '6fb82f9f926459f46ac895a992ffba27';

  constructor(private http: Http){ }

  getLogs():Observable<string> {
    let userName = 'robbell5';
    return this.http.get(`https://www.warcraftlogs.com:443/v1/reports/user/${userName}?api_key=${this.PUBLIC_KEY}`).map(response => {return response.json()});
  };

}
