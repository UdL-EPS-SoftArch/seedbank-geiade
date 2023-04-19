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
import { TakeRegisterComponent } from './take/take-register/take-register.component';
import { TakeEditComponent } from './take/take-edit/take-edit.component';
import { TakeDeleteComponent } from './take/take-delete/take-delete.component';
import { TakeDetailComponent } from './take/take-detail/take-detail.component';
import { TakeListComponent } from './take/take-list/take-list.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/create', component: TakeRegisterComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/:id/delete', component: TakeDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/:id/edit', component: TakeEditComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/:id', component: TakeDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'takes', component: TakeListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
