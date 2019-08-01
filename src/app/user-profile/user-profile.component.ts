import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  
  url="http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  disabled=true;
  userDetails;

  constructor(private userService: UserService, 
              private router: Router,
              private http:HttpClient) { }

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



  onFileUpload(file)
  {
    console.log(file);
    var formData=new FormData();
    formData.append('productImage',file);
    
    this.http.post(environment.apiBaseUrl+"/updateProfile", formData)
      .subscribe(event => {  
        console.log(event);
        this.url=event.toString();
      },
      err=>console.log(err),
      ()=>{
        // if (file) {
        //   var reader = new FileReader();
    
        //   reader.readAsDataURL(file); // read file as data url
          
        //   reader.onload = (event) => { // called once readAsDataURL is completed
        //     this.url = event.target.result;
        //   }
        // }


      });

      console.log(this.url);
  }



}