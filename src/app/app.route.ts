import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeOperationComponent } from './liste-operation/liste-operation.component';


export const ROUTES: Routes = [


    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'liste-operation', component: ListeOperationComponent },
  
  ];