import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ListeOperationComponent } from './liste-operation/liste-operation.component';


export const ROUTES: Routes = [


    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'liste-operation', component: ListeOperationComponent },
  
  ];