import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from "../social.service";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input('postID') postID;
  postData: any;
  postComments;

  constructor(private socialservice: SocialService) { }

  ngOnInit() {
    this.socialservice.getPost(postID, (data) => {
      this.postData = data;
    });
    this.socialservice.getPostComments(postID, (data) => {
      this.postComments = data;
    })
  }

}
