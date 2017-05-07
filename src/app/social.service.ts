import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialService {
  private s_url = 'http://localhost:8080';
  private data: any;
  constructor(private http: Http) { }

  getAllPosts(): any {
    this.data = {'test': 'I hope you don\'t see this.'};
    this.http.get(this.s_url + '/api/userPost')
      .map(res => res.json())
      .subscribe(
        data => {
          this.data = data;
        }
      );
    return this.data;
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
