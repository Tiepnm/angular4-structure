import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NewCmpComponent} from './new-cmp/new-cmp.component';

import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './shared/layout/header/header.component';
import {CoreModule} from "./core/core.module";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {APP_BASE_HREF} from "@angular/common";
import {UserComponent} from './user/user.component';
import {UserService2} from "./authen-module/service/user2.service";


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path: 'new-cmp',
    //     component: NewCmpComponent
    //   }
    // ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
