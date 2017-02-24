import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ReportMeta} from "../models/warcraft-logs/report-meta";
import {WarcraftLogsService} from "../services/warcraft-logs/warcraft-logs.service";
import {Observable} from "rxjs";

@Injectable()
export class GuildLogListResolver implements Resolve<ReportMeta> {
  constructor(private warcraftLogsService: WarcraftLogsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.warcraftLogsService.getGuildLogList();
  }

}
