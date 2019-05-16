import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { LoginComponent } from './login/login.component';
import { ListeOperationComponent } from './liste-operation/liste-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeOperationComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
