import {ItemStat} from "./item-stat";
import {TooltipParams} from "./tooltip-params";

export class Item {

  id:number;
  name:string;
  icon:string;
  quality:string;
  itemLevel:string;
  stats:ItemStat[];
  armor:number;
  context:string;
  displayInfoId:string;
  tooltipParams:TooltipParams;

  constructor(json:JSON){

    this.id = json['id'];
    this.name = json['name'];
    this.icon = json['icon'];
    this.quality = json['quality'];
    this.itemLevel = json['itemLevel'];
    this.stats = json['stats'];
    this.armor = json['armor'];
    this.context = json['context'];
    this.displayInfoId = json['displayInfoId'];
    this.tooltipParams = json['tooltipParams'];

  }

}

