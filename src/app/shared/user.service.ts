import {User} from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';


@Injectable()
export class UserService{

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
    constructor(private http:HttpClient) { }
    
    // selectedUser:User={
    //     fullName:'',
    //     email:'',
    //     password:''
    // };

getStatus(data){

  return this.http.post("http://localhost:3000/api/authenticate",data);
}

    
 postUser(user:User):Observable<User[]>{
     console.log(user);
    return this.http.post<User[]>(environment.apiBaseUrl+'/register',user);
  }


login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

 setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    console.log(token);
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
 
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  getUserProfile():Observable<User[]> {
    return this.http.get<User[]>(environment.apiBaseUrl + '/userProfile');
  }

  updateProfile(id,data):Observable<User[]>{
    return this.http.patch<User[]>(environment.apiBaseUrl+"/updateProfile/"+id,data);
  }

  verify(id,data){
     console.log(data);
    return this.http.post(environment.apiBaseUrl+'/verifyPassword/'+id,data);
  }


  
}
