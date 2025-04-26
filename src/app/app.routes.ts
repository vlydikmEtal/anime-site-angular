import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'anime-site',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'Home' },
  },
  {
    path: 'anime-list/:animeId',
    loadComponent: () =>
      import('./pages/anime-page/anime-page.component').then(
        (m) => m.AnimePageComponent
      ),
    data: { animation: 'AnimePage' }, 
  },
  { path: '', redirectTo: '/anime-site', pathMatch: 'full' },
];
