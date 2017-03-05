import {Component, OnInit} from '@angular/core';
import {Character} from "../../../models/battle-net/world-of-warcraft/character";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit{

  character:Character;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
  }

}
