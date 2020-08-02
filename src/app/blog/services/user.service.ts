import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
  public url:string="https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.httpClient.get<User[]>(this.url);
  }
}