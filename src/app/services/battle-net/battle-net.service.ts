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

  constructor(private http: Http) {}

  getGuildRoster(): Observable<Guild> {
    const guildName: string = 'Cinder%20and%20Ash';
    const fields: string = 'members%2C+ranks';

    const map = this.http.get(`${this.battleNetApiBaseUrl}/${this.guildEndPoint}/${this.realmName}/${guildName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).flatMap(
      response => {
        const guild = new Guild(response.json());

        let mythicRoster:GuildMember[] = guild.getMythicTanks();
        mythicRoster = mythicRoster.concat(guild.getMythicHeals());
        mythicRoster = mythicRoster.concat(guild.getMythicMelee());
        mythicRoster = mythicRoster.concat(guild.getMythicRanged());

        console.log(mythicRoster);

        const charFields: string = 'items';

        let httpArray = [];

        for(let i = 0; i < mythicRoster.length; i++){
          httpArray.push(this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${this.realmName}/${mythicRoster[i].character.name}?fields=${charFields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`)
            .map( response =>{
              let json = response.json();
              mythicRoster[i].character.equippedItems = new EquippedItems(json['items']);
          }));
        }

        return Observable.forkJoin(httpArray).map( res => {
          return guild;
        })

      });

    return map;
  }

  getCharacterDetails(characterName:string): Observable<Character> {
    const fields: string = 'items';

    return this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${this.realmName}/${characterName}?fields=${fields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`).map(
      response => {
        return new Character(response.json());
      });
  }

  // this.http.get(`${this.battleNetApiBaseUrl}/${this.characterEndPoint}/${this.realmName}/${guildMember.character.name}?fields=${charFields}&locale=${this.locale}&apikey=${this.PUBLIC_KEY}`)

}
