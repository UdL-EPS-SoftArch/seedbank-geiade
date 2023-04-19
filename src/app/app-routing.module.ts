import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { DonationAddComponent } from './donation/donation-add/donation-add.component';
import { DonationDeleteComponent } from './donation/donation-delete/donation-delete.component';
import { DonationEditComponent } from './donation/donation-edit/donation-edit.component';
import { DonationDetailComponent } from './donation/donation-detail/donation-detail.component';
import { DonationListComponent } from './donation/donation-list/donation-list.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestRegisterComponent } from './request/request-register/request-register.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDeleteComponent } from './request/request-delete/request-delete.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/add', component: DonationAddComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/:id/delete', component: DonationDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/:id/edit', component: DonationEditComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/:id', component: DonationDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'donations', component: DonationListComponent, canActivate: [LoggedInGuard]},
  { path: 'requests/create', component: RequestRegisterComponent},
  { path: 'requests/:id/delete', component: RequestDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'requests/:id/edit', component: RequestEditComponent, canActivate: [LoggedInGuard]},
  { path: 'requests/:id', component: RequestDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'requests', component: RequestListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
