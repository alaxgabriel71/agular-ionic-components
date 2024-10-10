import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nav-bar',
    loadChildren: () => import('./pages/nav-bar/nav-bar-routing.module').then(m => m.NavBarRoutingModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
