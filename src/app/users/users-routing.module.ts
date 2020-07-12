import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: 'add', component: UserAddComponent },
  { path: 'userList', component: UserListComponent },

  { path: '', redirectTo: '/add', pathMatch: 'full' },

  // { path: 'detail/:id', component: UserDetailComponent },
  // { path: 'edit/:id', component: UserEditComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
