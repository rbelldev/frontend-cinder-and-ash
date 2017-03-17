export class ReportMeta {

  constructor(json:string){
    this.id = json['id'];
    this.title =json['title'];
    this.owner = json['owner'];

    if(this.owner == "robbell5"){
      this.owner = 'Knute'
    }

    if(this.owner == "Grayfeather"){
      this.owner = 'Gray'
    }

    this.zone = json['zone'];
    this.start = json['start'];
    this.end = json['end'];
    this.startDate = new Date(this.start);
    this.displayDate = this.startDate.toLocaleDateString();
  }

  id:string;
  title:string;
  owner:string;
  zone:number;
  displayDate:string;
  start:number;
  end:number;
  startDate;

}
