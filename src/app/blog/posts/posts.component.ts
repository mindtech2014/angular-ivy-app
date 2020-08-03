import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostCreateComponent } from './post-create/post-create.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userId: string;
  posts: Post[];

  constructor(private postService: PostService, private route: ActivatedRoute, public dialog: MatDialog) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.userId = params['userId'];
    console.log(this.userId);
    this.getPosts()
  });
  }

  private getPosts () {
    this.postService.getPosts(this.userId).subscribe(posts=> { 
      console.log(posts);
      this.posts = posts });
  }

  public postSelected (post:Post){

  }

  openDialog(): void {
    console.log("open dialog");

    const dialogRef = this.dialog.open(PostCreateComponent, {
      width: '600px',
      data: {mode:'create', userId: this.userId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);

    });
  }

}