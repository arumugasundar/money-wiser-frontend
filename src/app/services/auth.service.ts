import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _router:Router) {

  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  register(name: string,email: string,password: string){
    const record: any = { name: name, email: email, password: password};
    return this.http.post<{message:string}>('http://localhost:3000/api/auth/register',record);
  }

  login(record: any){
    return this.http.post<{message:string,token:string}>('http://localhost:3000/api/auth/login',record);
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']).then(() => {
      console.log("Navigated to Login Page!")
    });
  }
}
