import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Post } from 'app/models/post.model';
import { Http } from '@angular/http';
@Injectable()
export class ApiService {
  apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: Http) {

  }
  getPosts(): Observable<Post[]> {
    return this.http.get(this.apiUrl + 'posts')
      .map(res => {
        return res.json().map(item => {
          return new Post(
            item.userId,
            item.id,
            item.title,
            item.body
          );
        });
      });
  }
  savePost(): Observable<any> {
    return this.http.post('https://httpbin.org/post', {});
  }
}
