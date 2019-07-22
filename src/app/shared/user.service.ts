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


 postUser(user:User):Observable<User[]>{
    return this.http.post<User[]>(environment.apiBaseUrl+'register',user);
  }

}






