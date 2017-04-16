import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BattleNetService} from "../../services/battle-net/battle-net.service";

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent {

  complexForm: FormGroup;

  constructor(private battleNetService: BattleNetService, formBuilder: FormBuilder) {
    this.complexForm = formBuilder.group({
      realmName: [null, Validators.required],
      characterName: [null, Validators.required],
    })
  }

  submitForm(value: any) {
    console.log(value);

    this.battleNetService.getCharacterForApplication(this.complexForm.controls['realmName'].value, this.complexForm.controls['characterName'].value).subscribe((character) => {
      if (character) {
        console.log("Character Found! ", character);
      } else {
        console.log('error!');
      }
    });
  }

}
