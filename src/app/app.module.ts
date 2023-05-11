import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxHateoasClientConfigurationService, NgxHateoasClientModule} from '@lagoshny/ngx-hateoas-client';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDeleteComponent} from './user/user-delete/user-delete.component';
import {UserSearchComponent} from './user/user-search/user-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginBasicModule} from './login-basic/login-basic.module';
import {ErrorHandlerModule} from './error-handler/error-handler.module';
import {AuthInterceptor} from './login-basic/auth-interceptor';
import {HttpErrorInterceptor} from './error-handler/http-error-interceptor';
import {AuthenticationBasicService} from './login-basic/authentication-basic.service';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {UserService} from './user/user.service';
import { PropagatorDeleteComponent } from './propagator/propagator-delete/propagator-delete.component';
import { PropagatorDetailComponent } from './propagator/propagator-detail/propagator-detail.component';
import { PropagatorEditComponent } from './propagator/propagator-edit/propagator-edit.component';
import { PropagatorListComponent } from './propagator/propagator-list/propagator-list.component';
import { PropagatorRegisterComponent } from './propagator/propagator-register/propagator-register.component';
import { PropagatorSearchComponent } from './propagator/propagator-search/propagator-search.component';
import { TakeDeleteComponent } from './take/take-delete/take-delete.component';
import { TakeDetailComponent } from './take/take-detail/take-detail.component';
import { TakeEditComponent } from './take/take-edit/take-edit.component';
import { TakeListComponent } from './take/take-list/take-list.component';
import { TakeSearchComponent } from './take/take-search/take-search.component';
import { DonationDetailComponent } from './donation/donation-detail/donation-detail.component';
import { DonationEditComponent } from './donation/donation-edit/donation-edit.component';
import { DonationListComponent } from './donation/donation-list/donation-list.component';
import { DonationAddComponent } from './donation/donation-add/donation-add.component';
import { DonationDeleteComponent } from './donation/donation-delete/donation-delete.component';
import { DonationSearchComponent } from './donation/donation-search/donation-search.component';
import { RequestDeleteComponent } from './request/request-delete/request-delete.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestRegisterComponent } from './request/request-register/request-register.component';
import { RequestSearchComponent } from './request/request-search/request-search.component';
import { RequestAddComponent } from './request/request-add/request-add.component';
import { TakeAddComponent } from './take/take-add/take-add.component';
import { BatchDeleteComponent } from './batch/batch-delete/batch-delete.component';
import { BatchAddComponent } from './batch/batch-add/batch-add.component';
import { BatchDetailComponent } from './batch/batch-detail/batch-detail.component';
import { BatchEditComponent } from './batch/batch-edit/batch-edit.component';
import { BatchListComponent } from './batch/batch-list/batch-list.component';
import { BatchSearchComponent } from './batch/batch-search/batch-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
    PropagatorDeleteComponent,
    PropagatorDetailComponent,
    PropagatorEditComponent,
    PropagatorListComponent,
    PropagatorRegisterComponent,
    PropagatorSearchComponent,
    PropagatorSearchComponent,
    TakeDeleteComponent,
    TakeDetailComponent,
    TakeEditComponent,
    TakeListComponent,
    TakeSearchComponent,
    DonationDetailComponent,
    DonationEditComponent,
    DonationListComponent,
    DonationAddComponent,
    DonationDeleteComponent,
    DonationSearchComponent,
    RequestDeleteComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestListComponent,
    RequestRegisterComponent,
    RequestSearchComponent,
    RequestAddComponent,
    TakeAddComponent,
    BatchDeleteComponent,
    BatchAddComponent,
    BatchDetailComponent,
    BatchEditComponent,
    BatchListComponent,
    BatchSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHateoasClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    AuthenticationBasicService, LoggedInGuard, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(hateoasConfig: NgxHateoasClientConfigurationService) {
    hateoasConfig.configure({
      http: {
        rootUrl: environment.API
      }
    });
  }
}
