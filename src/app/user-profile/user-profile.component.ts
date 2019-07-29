import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  
  
  disabled=true;
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
   

    console.log(this.disabled);
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


  onEdit(){

    this.disabled=!this.disabled;
    console.log(this.disabled);


  }

}