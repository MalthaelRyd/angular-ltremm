import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , AppRoutingModule,
  HttpClientModule
  ],
  declarations: [ AppComponent, UsersComponent, CreateUserComponent, UpdateComponent, DeleteUserComponent ],
  
  bootstrap:    [ AppComponent ],
  
  providers: [UserService]
})
export class AppModule { }
