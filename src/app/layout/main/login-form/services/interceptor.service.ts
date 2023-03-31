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
    // this.token = JSON.parse(localStorage.getItem('currentUser'))[0].token
    let request = req.clone({
      setHeaders: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjMxMTQiLCJFbWFpbCI6ImFkbWluQG1haWwuY29tIiwiVXNlciI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2NzkyOTA4NTEsImV4cCI6MTY3OTg5NTY1MSwiaWF0IjoxNjc5MjkwODUxfQ.ooQEn47rgA5f9CxHBVhxrRjzGT2IdBAuuBX3LgvMYzw"
      }
    })
    return next.handle(request)
  }

}
