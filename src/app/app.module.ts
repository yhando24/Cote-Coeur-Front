import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { LoginComponent } from './login/login.component';
import { ListeOperationComponent } from './liste-operation/liste-operation.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { HeaderComponent } from './header/header.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeOperationComponent,
    LoginComponent,
    SuperadminComponent,
    ConsultantComponent,
    ResponsableComponent,
    HeaderComponent,
    RoleComponent,
    UserComponent
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
