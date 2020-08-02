import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'posts',
        component: PostsComponent,
    }
];

