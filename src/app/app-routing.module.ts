import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoFoundComponent } from './pages/no-found/no-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        m => m.HomeModule
      ),
  },
  {
    path: 'gif/:id',
    loadChildren: () =>
      import(
        './components/gif-details/gif-details.module'
      ).then(m => m.GifDetailsModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import(
        './pages/search-results/search-results.module'
      ).then(m => m.SearchResultsModule),
  },
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
