import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
    title: 'Gemini S. Powell — Developer Advocate & Full Stack Developer',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
