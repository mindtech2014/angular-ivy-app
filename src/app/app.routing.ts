import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  }
];