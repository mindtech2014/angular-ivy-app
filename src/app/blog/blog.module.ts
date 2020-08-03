import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './blog.routing';
import { HttpClientModule } from '@angular/common/http';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild(routes)
    , ReactiveFormsModule
  ],
  declarations: [UsersComponent, PostsComponent, PostCreateComponent]
  ,exports:[RouterModule]
})
export class BlogModule { }