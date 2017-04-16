import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {BattleNetService} from "../services/battle-net/battle-net.service";

@Injectable()
export class CharacterResolver implements Resolve<any> {

  constructor(private battleNetService: BattleNetService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.battleNetService.getCharacterDetails(route.params['name']);
  }
}
