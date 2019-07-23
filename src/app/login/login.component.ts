import { Component, OnInit } from '@angular/core';
import {UserService} from  '../shared/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loading=false;
  submitted=false;


  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(){

    this.userService.getStatus(this.loginForm.value).subscribe()
  }

}
