export class ItemStat {

  stat:number;
  amount:number;

  constructor(json:JSON){

    this.stat = json['stat'];
    this.amount = json['amount'];

  }

}
