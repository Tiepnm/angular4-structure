import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenComponent} from './authen.component';
import {HeaderComponent} from "../shared/layout/header/header.component";
import {SettingComponent} from "./setting/setting.component";


const routes: Routes = [
  {
    path: '',
    component: AuthenComponent,

    children: [
      {
        path: 'setting',
        component: SettingComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
