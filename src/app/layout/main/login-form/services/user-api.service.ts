import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_base = 'https://iris-api.mycodelibraries.com/api/User'

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.user_base}/GetAllUsers`)
  }

  createUser(user: any) {
    return this.http.post(`${this.user_base}/CreateUser`, user)
  }

  login(user: any) {
    return this.http.post(`${this.user_base}/LoginAuthenticate`, user)
  }

  changepassowrd(passowrd: any) {
    return this.http.post(`${this.user_base}/ChangePassword`, passowrd)
  }

  sendReqForResetPassword(email: string) {
    return this.http.post(`${this.user_base}/SendResetPasswordRequest?email=${email}`, email)
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser');
  }
}
