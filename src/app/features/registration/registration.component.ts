import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailDirective } from 'src/app/shared/components';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private emailValidator: EmailDirective) { }

  registration = {
    name: '',
    email: '',
    password: ''
  };

  get name() { return this.registrationForm.get('name')!; }

  get email() { return this.registrationForm.get('email')!; }

  get password() { return this.registrationForm.get('password')!; }

  registrationForm!: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(this.registration.name, [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl(this.registration.email, [
        Validators.required,
        this.emailValidator.validate.bind(this.emailValidator)
      ]),
      password: new FormControl(this.registration.password, Validators.required)
    },  {  }); // <-- add custom validator at the FormGroup level
  }
}
