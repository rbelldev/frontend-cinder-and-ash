import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {WarcraftLogsService} from "../services/warcraft-logs/warcraft-logs.service";

@Injectable()
export class LogResolver implements Resolve<any> {

  constructor(private warcraftLogsService: WarcraftLogsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.warcraftLogsService.getLog(route.params['id']);
  }
}
