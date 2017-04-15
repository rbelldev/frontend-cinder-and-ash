import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent {

  complexForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.complexForm = formBuilder.group({
      server: [null, Validators.required],
      characterName:[null, Validators.required],
    })
  }

  submitForm(value: any) {
    console.log(value);
  }

}
