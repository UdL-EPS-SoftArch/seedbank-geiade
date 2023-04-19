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
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
