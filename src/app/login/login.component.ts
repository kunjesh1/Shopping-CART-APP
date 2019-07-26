import { Component, OnInit } from '@angular/core';
import {UserService} from  '../shared/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loading=false;
  submitted=false;
  serverErrorMessages='';

  model={
    email:'',
    password:''
  }   


  constructor(
    private router:Router,
    private userService:UserService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      
      email: [''],
      password: ['']
  });
  }

  onSubmit(){

    this.userService.login(this.loginForm.value).subscribe(res => {
      this.userService.setToken(res['token']);
      this.router.navigateByUrl('/main');
    },
    err => {
      this.serverErrorMessages = err.error.message;
    })
  }

}
