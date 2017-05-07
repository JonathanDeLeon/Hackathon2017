import { Component, OnInit } from '@angular/core';
import {SocialService} from "../social.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  newPost: any = {};
  constructor(private ss: SocialService, private router: Router) { }

  ngOnInit() {

  }

  createNewPost() {
    const date = new Date();
    this.newPost.date = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
    this.newPost.like = 0;
    this.newPost.userId = '0';
    this.ss.createPost(this.newPost, (data) => {console.log(data); this.router.navigate(['/']);});
  }
}
