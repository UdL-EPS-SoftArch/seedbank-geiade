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
import { PropagatorDeleteComponent } from './propagator/propagator-delete/propagator-delete.component';
import { PropagatorDetailComponent } from './propagator/propagator-detail/propagator-detail.component';
import { PropagatorEditComponent } from './propagator/propagator-edit/propagator-edit.component';
import { PropagatorListComponent } from './propagator/propagator-list/propagator-list.component';
import { PropagatorRegisterComponent } from './propagator/propagator-register/propagator-register.component';
import { PropagatorSearchComponent } from './propagator/propagator-search/propagator-search.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'propagators/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'propagators/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'propagators/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'propagators', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
