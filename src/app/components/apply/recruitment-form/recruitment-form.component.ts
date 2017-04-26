import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Character} from "../../../models/battle-net/world-of-warcraft/character";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CinderAndAshService} from "../../../services/cinder-and-ash/cinder-and-ash.service";

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent implements OnInit {

  recruitmentForm: FormGroup;
  character: Character;
  success : boolean;
  error : boolean;

  constructor(private route: ActivatedRoute, formBuilder: FormBuilder,
              private cinderAndAshService: CinderAndAshService, private router : Router) {

    this.buildRecruitmentForm(formBuilder);

  }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
    this.recruitmentForm.controls['mainSpec'].setValue(this.character.talents.className);
    this.recruitmentForm.controls['realm'].setValue(this.character.realm || "unknown");
    this.recruitmentForm.controls['name'].setValue(this.character.name);
    this.recruitmentForm.controls['characterClass'].setValue(this.character.class);
  }

  submitForm(value: any) {
    console.log(value);
    this.cinderAndAshService.postGuildApplication(value);
    this.success = true;
  }

  private buildRecruitmentForm(formBuilder: FormBuilder) {
    this.recruitmentForm = formBuilder.group({
      realm:[null, Validators.required],
      name:[null, Validators.required],
      characterClass:[null, Validators.required],
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
    });
  }
}
