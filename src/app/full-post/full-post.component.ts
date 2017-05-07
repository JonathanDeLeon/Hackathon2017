import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from '../social.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input('postID') postID;
  post: any;
  postComments;
  private subscription: Subscription;

  constructor(private socialservice: SocialService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.postID = param['id'];
        this.socialservice.getPost(this.postID, (data) => {
          this.post = data;
        });
        this.socialservice.getPostComments(this.postID, (data) => {
          this.postComments = data;
        });
      });
  }

}
