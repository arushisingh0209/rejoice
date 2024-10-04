import { Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './home/login-page/login-page.component';

export const routes: Routes = [
    {
    path: 'home',
    component: LandingPageComponent 
   },
   {
    path: 'login',
    component: LoginPageComponent
   }
];
