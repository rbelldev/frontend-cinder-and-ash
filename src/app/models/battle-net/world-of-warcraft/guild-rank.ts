export class GuildRank {

  constructor(rankId:number) {

    this.rankId = rankId;
    this.rankName = this.rankNames[rankId];

  }

  rankId:number;
  rankName:string;
  rankNames = [
    "Ember",
    "Bloodfire",
    "Inferno Council",
    "Tempered Knight",
    "Iron Fist",
    "Ashen Warrior",
    "Spark",
    "Petrified",
  ];

}
