// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: any;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  constructor(public userdata: LoginService, private route: Router) { }

  ngOnInit() {
    this.getuserdata()
  }

  getuserdata() {
    this.userdata.getdata().subscribe((res) => {
      console.log("Get login data", res);
      this.user = res;
    });
  }

  postuserdata(loginForm: any) {
    this.userdata.postdata({ ...loginForm }).subscribe((res) => {
      console.log("Post data", res);
      this.getuserdata();
    });
  }
}
