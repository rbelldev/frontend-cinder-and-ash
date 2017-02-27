import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";

@Component({
  selector: 'roster-main',
  templateUrl: 'roster-main.component.html',
  styleUrls: ['roster-main.component.css']
})
export class RosterMainComponent {

  guild: Guild;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.guild = this.route.snapshot.data['guild'];
  }

}
