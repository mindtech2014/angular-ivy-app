import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogRouting } from './blog.routing';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(BlogRouting)
  ],
  declarations: [UsersComponent, PostsComponent]
  ,exports:[RouterModule]
})
export class BlogModule { }