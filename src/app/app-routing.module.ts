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
import { TakeEditComponent } from './take/take-edit/take-edit.component';
import { TakeDeleteComponent } from './take/take-delete/take-delete.component';
import { TakeDetailComponent } from './take/take-detail/take-detail.component';
import { TakeListComponent } from './take/take-list/take-list.component';
import { TakeAddComponent } from './take/take-add/take-add.component';
import { DonationAddComponent } from './donation/donation-add/donation-add.component';
import { DonationDeleteComponent } from './donation/donation-delete/donation-delete.component';
import { DonationEditComponent } from './donation/donation-edit/donation-edit.component';
import { DonationDetailComponent } from './donation/donation-detail/donation-detail.component';
import { DonationListComponent } from './donation/donation-list/donation-list.component';
import { BatchAddComponent } from './batch/batch-add/batch-add.component';
import { BatchDeleteComponent } from './batch/batch-delete/batch-delete.component';
import { BatchEditComponent } from './batch/batch-edit/batch-edit.component';
import { BatchDetailComponent } from './batch/batch-detail/batch-detail.component';
import { BatchListComponent } from './batch/batch-list/batch-list.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDeleteComponent } from './request/request-delete/request-delete.component';
import { RequestAddComponent } from './request/request-add/request-add.component';


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
  { path: 'takes/add', component: TakeAddComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/:id/delete', component: TakeDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/:id/edit', component: TakeEditComponent, canActivate: [LoggedInGuard]},
  { path: 'takes/:id', component: TakeDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'takes', component: TakeListComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/add', component: DonationAddComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/:id/delete', component: DonationDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/:id/edit', component: DonationEditComponent, canActivate: [LoggedInGuard]},
  { path: 'donations/:id', component: DonationDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'donations', component: DonationListComponent, canActivate: [LoggedInGuard]},
  { path: 'batchs/add', component: BatchAddComponent, canActivate: [LoggedInGuard]},
  { path: 'batchs/:id/delete', component: BatchDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'batchs/:id/edit', component: BatchEditComponent, canActivate: [LoggedInGuard]},
  { path: 'batchs/:id', component: BatchDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'batchs', component: BatchListComponent, canActivate: [LoggedInGuard]},
  { path: 'requests/add', component: RequestAddComponent, canActivate: [LoggedInGuard]},
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
