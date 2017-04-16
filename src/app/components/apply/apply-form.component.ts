import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BattleNetService} from "../../services/battle-net/battle-net.service";
import {Router} from "@angular/router";

@Component({
  selector: 'apply-form',
  templateUrl: 'apply-form.component.html',
  styleUrls: ['apply-form.component.css']
})
export class ApplyFormComponent {

  getStartedForm: FormGroup;
  characterNotFound: boolean;

  constructor(private battleNetService: BattleNetService,
              formBuilder: FormBuilder,
              private router: Router) {
    this.getStartedForm = formBuilder.group({
      realmName: [null, Validators.required],
      characterName: [null, Validators.required],
    })
  }

  submitForm(value: any) {
    const realmName = this.getStartedForm.controls['realmName'].value;
    const characterName = this.getStartedForm.controls['characterName'].value;

    this.characterNotFound = false;

    this.battleNetService.getCharacterForApplication(realmName, characterName).subscribe(
      (character) => {
        console.log("Character Found! ", character);
        this.router.navigateByUrl(`/apply/${realmName}/${characterName}`);

      },
      (error) => {
        this.characterNotFound = true;
        console.log('error!');
      });
  }

}
