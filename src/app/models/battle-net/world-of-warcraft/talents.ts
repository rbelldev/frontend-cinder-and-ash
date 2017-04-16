export class Talents {

  className: string;

  constructor(json: JSON) {
    this.className = json[0]['spec']['name'];
  }
}
