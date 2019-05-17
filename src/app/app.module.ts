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

@NgModule({
  declarations: [
    AppComponent,
    ListeOperationComponent,
    LoginComponent,
    AccueilComponent
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
