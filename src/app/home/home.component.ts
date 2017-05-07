import { Component, OnInit } from '@angular/core';
import {SocialService} from "../social.service";
import IPostModel from "../share/IPostModel";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    SocialService
  ]
})
export class HomeComponent implements OnInit {
  allPosts: any[];
  constructor(private socialService: SocialService) {
    this.allPosts = [];
    socialService.getAllPosts((data) => {
      for(let d of data) {
        this.allPosts.push(d);
      }
    } );
  }

  ngOnInit() {
  }

}
