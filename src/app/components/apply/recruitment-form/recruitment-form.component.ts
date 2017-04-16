import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Character} from "../../../models/battle-net/world-of-warcraft/character";

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent implements OnInit {

  character:Character;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
  }
}
