import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
    title: 'Gemini S. Powell — Developer Advocate & Full Stack Developer',
  },
  {
    path: 'resume',
    canActivate: [
      () => {
        inject(DOCUMENT).location.href = '/resume.pdf';
        return false;
      },
    ],
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
