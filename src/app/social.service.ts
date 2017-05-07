import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialService {
  private s_url = 'http://localhost:8080';
  constructor(private http: Http) { }

  getAllPosts(cb): any {
    this.http.get(this.s_url + '/api/userPost')
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  getPost(postID: string): any {
    this.http.get(this.s_url + '/api/userPost/' + postID)
      .map(res => res.json())
      .subscribe(
        data => { return data; }
      );
  }

  getUserPosts(userID: string): any {
    this.http.get(this.s_url + '/api/userPost/user/' + userID)
      .map(res => res.json())
      .subscribe(
        data => { return data; }
      );
  }

  likePost(postID: string): void {

  }


}
