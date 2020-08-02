import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './blog.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, PostsComponent]
  ,exports:[RouterModule]
})
export class BlogModule { }