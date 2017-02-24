export class ReportMeta {

  constructor(json:string){
    this.id = json['id'];
    this.title =json['title'];
    this.owner = json['owner'];
    this.zone = json['zone'];
    this.startTime = json['startTime'];
    this.endTime = json['endTime'];
  }

  id:string;
  title:string;
  owner:string;
  zone:number;
  startTime:number;
  endTime:number;

}
