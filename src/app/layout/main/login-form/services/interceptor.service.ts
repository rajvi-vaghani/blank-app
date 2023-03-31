import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  apiUrl = "https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate"
  Url = "https://iris-api.mycodelibraries.com/api/User"
  token: string


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('currentUser')) {
      this.token = JSON.parse(localStorage.getItem('currentUser'))[0].token
    }

    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return next.handle(request)
  }

}
