import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';


export const ROUTES: Routes = [


    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
  
  ];