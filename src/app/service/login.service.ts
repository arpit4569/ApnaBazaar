import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:7099'

  loginStatus = false;

  constructor(private http: HttpClient) { }

  verifyUser(loginForm: FormGroup){
    console.log(loginForm.value);
    return this.http.post(this.url + '/' + 'verifyUser', loginForm.value);
  }

  logOut(){
    this.loginStatus = false;
    sessionStorage.removeItem('username');
  }

  getLoginStatus(){
    return this.loginStatus;
  }

}
