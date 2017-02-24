export class ReportMeta {

  constructor(json:string){
    this.id = json['id'];
    this.title =json['title'];
    this.owner = json['owner'];
    this.zone = json['zone'];
    this.start = json['start'];
    this.end = json['end'];
  }

  id:string;
  title:string;
  owner:string;
  zone:number;
  start:number;
  end:number;

}
