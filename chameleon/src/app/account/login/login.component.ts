import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private auth: AuthenticationService, private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, password} = this.loginForm.value;
    this.auth.setCredentials(username, password);
    if (this.auth.checkCredentials(this.api.checkCredentials())) {
      console.log("ola")
      this.auth.login(this.api.fetchToken());
    }
  }

}
