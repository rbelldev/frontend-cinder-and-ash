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

  complexForm: FormGroup;

  constructor(private battleNetService: BattleNetService,
              formBuilder: FormBuilder,
              private router:Router) {
    this.complexForm = formBuilder.group({
      realmName: [null, Validators.required],
      characterName: [null, Validators.required],
    })
  }

  submitForm(value: any) {
    console.log(value);

    const realmName = this.complexForm.controls['realmName'].value;
    const characterName = this.complexForm.controls['characterName'].value;

    this.battleNetService.getCharacterForApplication(realmName, characterName).subscribe((character) => {
      if (character) {
        console.log("Character Found! ", character);
        this.router.navigateByUrl(`/apply/${realmName}/${characterName}`);
      } else {
        console.log('error!');
      }
    });
  }

}
