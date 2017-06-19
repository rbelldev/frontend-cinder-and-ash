import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";
import {Character} from "../../models/battle-net/world-of-warcraft/character";
import {GuildMember} from "../../models/battle-net/world-of-warcraft/guild-member";
import {EquippedItems} from "../../models/battle-net/world-of-warcraft/equipped-items";

@Injectable()
export class BattleNetService {

  PUBLIC_KEY: string = 'q4p63gjbn83neb8h9wecj4g366edsbvd';
  SECRET_KEY: string = 'E2Kqq4rMpXz4WpBQfKAtKVmPUn2dQXqF';

  private battleNetApiBaseUrl: string = 'https://us.api.battle.net';

  private realmName: string = 'malganis';
  private locale: string = 'en_US';

  private guildEndPoint: string = 'wow/guild';
  private characterEndPoint: string = 'wow/character';

  constructor(private http: Http) {
  }

  getGuildRoster(): Observable<Guild> {
    const guildName: string = 'Cinder%20and%20Ash';
    const fields: string = 'members%2C+ranks';

    return this.http.get(`${this.battleNetApiBaseUrl}/${this.guildEndPoint}/${this.realmName}/${guildName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).flatMap(
      response => {
        const guild = new Guild(response.json());

        let mythicRoster: GuildMember[] = guild.getMythicRoster();

        const charFields: string = 'items';

        let httpArray = [];

        for (let i = 0; i < mythicRoster.length; i++) {
          const characterInfo = this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${this.realmName}/${mythicRoster[i].character.name}?fields=${charFields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`)
            .map(response => {
              let json = response.json();
              mythicRoster[i].character.equippedItems = new EquippedItems(json['items']);
            });

          httpArray.push(characterInfo);

          this.sleep(100);
        }

        return Observable.forkJoin(httpArray).map(res => {
          return guild;
        })

      });
  }

  getCharacterDetails(characterName: string): Observable<Character> {
    const fields: string = 'items';

    return this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${this.realmName}/${characterName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).map(
      response => {
        return new Character(response.json());
      });
  }

  getCharacterForApplication(realmName: string, characterName: string): Observable<Character> {
    const fields: string = 'items, progression, talents';

    return this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${realmName}/${characterName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).map(
      (response) => {
        let character: Character = null;
        try {
          character = new Character(response.json());
        } catch (e) {
        }
        return character
      });
  }

  sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
}
