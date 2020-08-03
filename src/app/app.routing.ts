import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path:''
    ,redirectTo:'/blog'
    ,pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  }
];