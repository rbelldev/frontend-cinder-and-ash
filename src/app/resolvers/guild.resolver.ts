import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Guild} from "../models/battle-net/world-of-warcraft/guild";
import {BattleNetService} from "../services/battle-net/battle-net.service";

@Injectable()
export class GuildResolver implements Resolve<Guild> {
  constructor(private battleNetService: BattleNetService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.battleNetService.getGuildRoster();
  }

}
