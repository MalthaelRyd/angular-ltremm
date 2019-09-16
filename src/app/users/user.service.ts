import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, ResponseCreate, RequestCreate } from './user.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  private url ="https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);
  }

  createUser(request:RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url,request);
  }
}