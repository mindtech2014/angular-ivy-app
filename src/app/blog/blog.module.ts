import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, PostsComponent]
})
export class BlogModule { }