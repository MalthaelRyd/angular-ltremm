import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent} from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component'
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [
 {path: 'users', component: UsersComponent },
 {path: 'users/create', component: CreateUserComponent },
 {path: 'users/update/:id', component: UpdateComponent },
 {path: 'users/delete/:id', component: DeleteUserComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }