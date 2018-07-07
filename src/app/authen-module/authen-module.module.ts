import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenComponent } from './authen.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from "../shared/layout/header/header.component";
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import {UserService2} from "./service/user2.service";

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: [UserService2],
  declarations: [AuthenComponent, SettingComponent]
})
export class AuthenModuleModule { }
