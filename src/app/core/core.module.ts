import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpTokenInterceptor} from "./service/interceptors/http.token.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ProfileService} from "./service/profile.service";
import {ApiService} from "./service/api.service";
import {UserService} from "./service/user.service";
import {AppConfig, HERO_DI_CONFIG, TOKEN2, userService} from "./service/base.service";
import {AnalyticsService} from "./service/analytics.service";
import {AnalyticsImplementation, Metric} from "./service/analytics-demo.interface";
import {EvenBetterLogger, Logger} from "./service/logger";


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    ProfileService,

    { provide: Logger, useClass: EvenBetterLogger },

    {
        provide: AnalyticsService,  useFactory: () => {


        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };

        // create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);

      }
    },
    UserService,
    {provide: 'userService33', useClass: UserService},
    {provide: 'API_URL', useValue: 'http://my.api.com/v1'},


  ],

  declarations: []
})
export class CoreModule {
}
