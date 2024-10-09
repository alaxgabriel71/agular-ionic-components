import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';
import { TabsPage } from '../components/nav-bar/tabs/tabs.page';
import { ButtonComponent } from 'src/components/button/button.component';
import { HomeComponent } from './pages/home/home.page';
import { ReturnButtonComponent } from 'src/components/return-button/return-button.component';
import { NavBarPage } from './pages/nav-bar/nav-bar.page';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarPage,
    NavBarComponent,
    TabsPage,
    ButtonComponent,
    ReturnButtonComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
