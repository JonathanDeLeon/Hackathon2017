import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialService {
  private s_url = 'http://localhost:8080';
  constructor(private http: Http) { }

  getAllPosts(cb): void {
    this.http.get(this.s_url + '/api/userPost')
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  getPost(postID: string, cb: any): void {
    this.http.get(this.s_url + '/api/userPost/' + postID)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  getUserPosts(userID: string, cb: any): void {
    this.http.get(this.s_url + '/api/userPost/user/' + userID)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  likePost(postID: string, cb: any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.put(this.s_url + '/api/userPost/user/' + postID, {}, options)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  createPost(post: any, cb: any): void {
    this.http.post(this.s_url + '/api/userPost/', post)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  getComment(commentID: string, cb: any): void {
    this.http.get(this.s_url + '/api/comment/' + commentID)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  getPostComments(postID: string, cb: any): void {
    this.http.get(this.s_url + '/api/comment/post/' + postID)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  getUserComments(userID: string, cb: any): void {
    this.http.get(this.s_url + '/api/comment/user/' + userID)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

  createComment(post: any, cb: any): void {
    this.http.post(this.s_url + '/api/comment/', post)
      .map(res => res.json())
      .subscribe(
        data => {
          cb(data);
        }
      );
  }

}
