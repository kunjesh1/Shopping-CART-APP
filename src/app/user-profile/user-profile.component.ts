import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ToastrService} from 'ngx-toastr';
 
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  
  url="http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  disabled=true;
  userDetails;
  kk="Kkfdj";

  constructor(private userService: UserService, 
              private router: Router,
              private http:HttpClient,
              private storage:AngularFireStorage,
              private toastr:ToastrService) { }

            

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

  onCallUpdateService(id,data)
  {

   
        this.userService.updateProfile(id,data).subscribe(
          res=>{
          },
          err=>{
            this.toastr.error("Something went wrong");
            console.log(err);
          },
          ()=>{
            this.toastr.success("Records Updated successfully");
            this.ngOnInit(); 
          }

        );

     
  }


  onFileUpload(file)
  {
    console.log(file);
    var formData=new FormData();
    formData.append('productImage',file);

    var filePath=`images/${"Kunjesh"}_${new Date().getTime()}`;
    const fileRef=this.storage.ref(filePath);
    this.storage.upload(filePath,file).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          console.log(url);
           this.onCallUpdateService(this.userDetails._id,{"imageURL":url});
          console.log(this.userDetails);


        })

      })
    ).subscribe();
    
   
      console.log(this.url);
  }

  showPreview(event)
  {
    if(event.target.files&&event.target.files[0])
    {
      const reader=new FileReader();
      reader.onload=(e:any)=>this.url=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

 onSave(data)
  {
    
    this.userService.getUserProfile().subscribe(
      res => {
        this.onCallUpdateService(this.userDetails._id,data);
      },
      err => { 
        
        console.log(err);
        
      },
      ()=>{
       
        console.log(this.userDetails);
       
        

      });
 

  }



}