import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
    title: 'Gemini S. Powell — Developer Advocate & Full Stack Developer',
  },
  {
    path: 'resume',
    loadComponent: () => import('./resume-page').then((m) => m.ResumePageComponent),
    title: "Gemini S. Powell's Resume",
  },
  {
    path: '**',
    redirectTo: '',
  },
];
