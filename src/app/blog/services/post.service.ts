import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  public url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient: HttpClient) { }

  getPosts(userId: string): Observable<Post[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.httpClient.get<Post[]>(this.url+"?userid"+userId);
  }

  createPost(post:Post): Observable<any>{
    return this.httpClient.post<any>(this.url, post);
  }
}