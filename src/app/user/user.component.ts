import {Component, Inject, Injector, OnInit, ReflectiveInjector} from '@angular/core';
import {UserService} from "../core/service/user.service";
import {TOKEN} from "../core/service/base.service";
import {logging} from "selenium-webdriver";
import {Logger} from "../core/service/logger";
import {Metric} from "../core/service/analytics-demo.interface";
import {AnalyticsService} from "../core/service/analytics.service";
import {UserService2} from "../authen-module/service/user2.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userName: string;
  userService33: UserService;
  userService: UserService;
  // userService: UserService;
  test: string;
  token: any;
  logger: any;

  constructor(injector: Injector, @Inject('userService33') userService33: UserService, userService: UserService, @Inject('API_URL') apiUrl: string, @Inject(TOKEN) token: any, logger: Logger, analyticsService: AnalyticsService) {
    // Create an _injector_ and ask for it to resolve and create a UserService
    // const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userService33 = userService33;
    this.userService = userService;
    // use the injector to **get the instance** of the UserService
    this.test = apiUrl;
    this.logger = logger;


    this.token = token;
    let metric: Metric = {
      eventName : 'click1',
      scope:'root'
    };
    analyticsService.record(metric);
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService33.setUser({
      name: 'Nate Murray1'
    });
    this.userService.setUser({
      name: 'Nate Murray'
    });
    this.token.setUser({
      name: 'Nate Murray12'
    });
    console.log("token user: " + this.token.getUser().name);
    // now **read** the user name from the service
    this.userName = this.userService33.getUser().name;
    console.log('User name is: ', this.userName);

    console.log('User name from UserService is: ', this.userService.getUser().name);

    this.logger.log('test');
  }

}
