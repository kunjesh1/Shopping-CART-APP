import { Component, OnInit, Input,Inject } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

 // @Input('id') id;
  errorMessage;

  constructor( private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public childData: any) { }

  ngOnInit() {
    
  }


  onSave(data)
  {
    console.log(this.childData.id);
    if(data.password)
    this.userService.verify(this.childData.id,{"password":data.password}).subscribe(res=>
      {console.log(res);
        this.errorMessage=res;}
        );
  }
}
