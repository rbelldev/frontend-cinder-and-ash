import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {BattleNetService} from "../services/battle-net/battle-net.service";

@Injectable()
export class CharacterRecruitmentResolver implements Resolve<any> {

  constructor(private battleNetService: BattleNetService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.battleNetService.getCharacterForApplication(route.params['realm'], route.params['name']);
  }
}
