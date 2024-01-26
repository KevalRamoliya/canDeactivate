// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiurl = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get(this.apiurl);
  }

  postdata(user: any) {
    return this.http.post(this.apiurl, user);
  }
}
