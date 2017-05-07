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
  postID: any;
  post: any;

  constructor(private socialservice: SocialService, private activatedRoute: ActivatedRoute) {
    this.postID = this.activatedRoute.snapshot.params['postID'];
    console.log(this.postID);
    this.socialservice.getPost(this.postID, (data) => {
      this.post = data[0];
    });
  }

  ngOnInit() {
  }
}
