import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from "../social.service";


@Component({
  selector: 'post-comp',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('data') post: any;
  comments: any[];
  constructor(private socialService: SocialService) {
  }
  getComments(postId: string): any{
    this.socialService.getPostComments(postId, (data) => {
      this.comments = [];
      for(let d of data) {
        this.comments.push(d);
      }
    });
    console.log(this.comments);
  }

  ngOnInit() {
    this.comments = this.getComments(this.post.postId);
  }

}
