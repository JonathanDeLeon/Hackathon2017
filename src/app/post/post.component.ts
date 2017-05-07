import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'post-comp',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('data') data: any;
  constructor() { }

  ngOnInit() {
  }

}
