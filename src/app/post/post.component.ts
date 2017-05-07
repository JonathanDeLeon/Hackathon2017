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
    this.comments = [];
  }
  getComments(postId: string): any{
    this.socialService.getPostComments(this.post.postId, (data) => {
      console.log(data);
      for(let d of data) {
        this.comments.push(d);
      }
    });
    console.log(this.comments);
  }

  ngOnInit() {
  }

}
