import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) { }

  ngOnInit() { }
  
  onFormSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.authService.login(this.user.email, this.user.password);
  }
}