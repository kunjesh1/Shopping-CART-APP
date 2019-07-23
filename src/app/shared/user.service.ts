import {User} from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService{

    constructor(private http:HttpClient) { }
    
    selectedUser:User={
        fullName:'',
        email:'',
        password:''
    };

getStatus(data){

  return this.http.post("http://localhost:3000/api/authenticate",data);
}

    
 postUser(user:User):Observable<User[]>{
     console.log(user);
    return this.http.post<User[]>("http://localhost:3000/api/register",user);
  }

}






