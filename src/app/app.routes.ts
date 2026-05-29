import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/portfolio-page/portfolio-page.component').then(
            (m) => m.PortfolioPageComponent,
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
