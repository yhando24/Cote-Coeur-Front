import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { LoginComponent } from './login/login.component';
import { ListeOperationComponent } from './liste-operation/liste-operation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeOperationComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    RoleComponent,
    UserComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
