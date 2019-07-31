import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   registerForm:FormGroup;
   loading=false;
   submitted=false;


  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private toastr:ToastrService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });
  }

  


    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.postUser(this.registerForm.value)
            .subscribe(
                data => {},
                error => {
                    console.log(error);
                    this.loading = false;
                    this.toastr.error("Something Went Wrong");
                },
                ()=>{
                 
                  this.toastr.success("User Successfully Created");
                 this.router.navigateByUrl('/login');});
             
                
    }

}
