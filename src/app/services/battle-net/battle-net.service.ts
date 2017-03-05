import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";
import {Character} from "../../models/battle-net/world-of-warcraft/character";

@Injectable()
export class BattleNetService {

  PUBLIC_KEY: string = 'q4p63gjbn83neb8h9wecj4g366edsbvd';
  SECRET_KEY: string = 'E2Kqq4rMpXz4WpBQfKAtKVmPUn2dQXqF';

  private battleNetApiBaseUrl: string = 'https://us.api.battle.net';

  private realmName: string = 'malganis';
  private locale: string = 'en_US';

  private guildEndPoint: string = 'wow/guild';
  private characterEndPoint: string = 'wow/character';

  constructor(private http: Http) {}

  getGuildRoster(): Observable<Guild> {
    const guildName: string = 'Cinder%20and%20Ash';
    const fields: string = 'members%2C+ranks';

    return this.http.get(`${this.battleNetApiBaseUrl}/${this.guildEndPoint}/${this.realmName}/${guildName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).map(
      response => {
        return new Guild(response.json());
      });
  }

  getCharacterDetails(characterName:string): Observable<Character> {
    const fields: string = 'items';

    return this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${this.realmName}/${characterName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).map(
      response => {
        return new Character(response.json());
      });
  }

}
