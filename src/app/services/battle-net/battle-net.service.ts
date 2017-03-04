import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";

@Injectable()
export class BattleNetService {

  PUBLIC_KEY: string = 'q4p63gjbn83neb8h9wecj4g366edsbvd';
  SECRET_KEY: string = 'E2Kqq4rMpXz4WpBQfKAtKVmPUn2dQXqF';

  private baseUrl: string = 'https://us.api.battle.net';

  private realmName: string = 'malganis';
  private guildName: string = 'Cinder%20and%20Ash';
  private locale: string = 'en_US';

  private guildEndPoint: string = 'wow/guild';

  constructor(private http: Http) {}

  getGuildRoster(): Observable<Guild> {
    const fields: string = 'members%2C+ranks';

    return this.http.get(`${this.baseUrl}/${this.guildEndPoint}/${this.realmName}/${this.guildName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).map(
      response => {
        return new Guild(response.json());
      });
  }

}
