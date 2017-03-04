export class ClassSpec {

  constructor(json:string){

    this.name = json['name'];
    this.role = json['role'];

  }

  name:string;
  role:string;

}

