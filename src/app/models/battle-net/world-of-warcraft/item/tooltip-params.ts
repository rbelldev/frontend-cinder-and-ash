export class TooltipParams {

  enchant:number;
  set:number[] = [];

  constructor(json:JSON){

    this.enchant = json['enchant'];
    this.set = json['set'];

  }

}
