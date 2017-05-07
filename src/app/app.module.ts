import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {SocialService} from "./social.service";
import { PostComponent } from './post/post.component';
import { FullPostComponent } from './full-post/full-post.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    FullPostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        'path': '/',
        component: HomeComponent
      },
      {
        'path': '/new',
        component: CreatePostComponent
      },
      {
        'path': '/post/:id',
        component: FullPostComponent
      }
    ])
  ],
  providers: [ SocialService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
