import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.page';
import { NavBarPage } from './pages/nav-bar/nav-bar.page';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nav-bar',
    loadChildren: () => import('./pages/nav-bar/nav-bar-routing.module').then(m => m.NavBarRoutingModule),
    /*children: [
       {
        path: 'tabs',
        component: NavBarComponent,
        children: [
          {
            path: 'tab1',
            loadChildren: () => import('../components/nav-bar/tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'tab2',
            loadChildren: () => import('../components/nav-bar/tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'tab3',
            loadChildren: () => import('../components/nav-bar/tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: '',
            redirectTo: '/nav-bar/tabs/tab1',
            pathMatch: 'full'
          }
        ]
      }
    ]*/
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
