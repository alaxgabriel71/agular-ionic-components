import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../../../components/nav-bar/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../../../components/nav-bar/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../../../components/nav-bar/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/nav-bar/tab1',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NavBarRoutingModule { }
