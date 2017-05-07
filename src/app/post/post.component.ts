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
  newComment: any = {};
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

  submitComment(){
    const date = new Date();
    this.newComment.date = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
    this.newComment.like = 0;
    this.newComment.userId = '0';
    this.newComment.postId = this.post.postId;
    this.newComment.pictureUrl = '';
    this.socialService.createComment(this.newComment, (data) => {console.log(data); this.newComment = {}});
  }

  ngOnInit() {
    this.comments = this.getComments(this.post.postId);
  }

}
