import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInAuthGuard } from './guards/logged-in-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoggedInAuthGuard]},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    // component: UserListComponent, canActivate: [AuthGuard]
  { path: '', redirectTo: 'dashboard' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
