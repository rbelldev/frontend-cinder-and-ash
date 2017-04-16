import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Character} from "../../../models/battle-net/world-of-warcraft/character";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent implements OnInit {

  recruitmentForm: FormGroup;
  character:Character;

  constructor(private route: ActivatedRoute,  formBuilder: FormBuilder) {
    this.recruitmentForm = formBuilder.group({
      isMainCharacter: [null, Validators.required],
      mainSpec: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      offspecExperienceAndProgress: [null, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      previousRaidingExperience: [null, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      motivationForRaiding: [null, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      selfDescription: [null, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      canYouMakeAllRaidNights: [null, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      raidLogLink: [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      raidLogPerformanceDetails: [null, Validators.compose([Validators.required, Validators.maxLength(1000)])],
      contactInfo: [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
    })
  }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
    this.recruitmentForm.controls['mainSpec'].setValue(this.character.talents.className);
  }

  submitForm(value: any) {
    console.log(value);
  }
}
