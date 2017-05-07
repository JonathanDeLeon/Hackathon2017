import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SocialService {
  private s_url = 'http://localhost:8080';
  constructor(private http: Http) { }

  getAllPosts(): any {
    this.http.get(this.s_url + 'api/userPost')
      .map(res => res.json())
      .subscribe(
        data => { return data; }
      );
  }



}
