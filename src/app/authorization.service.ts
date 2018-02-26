import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:9995/api/user');
  }

}
