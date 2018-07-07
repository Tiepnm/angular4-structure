import {Component, Inject, Injector, OnInit, ReflectiveInjector} from '@angular/core';
import {UserService2} from "../service/user2.service";
import {MandrillService} from "../service/mail";
import {ProfileService} from "../../core/service/profile.service";
import {TOKEN2} from "../../core/service/base.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {

  constructor(user2Service : UserService2, private injector2: Injector, @Inject(TOKEN2) token: any) {


    user2Service.setUser({
      name: 'Nate Murray122121'
    });
    console.log(user2Service.getUser().name);
    console.log(injector2);
    console.log(injector2.get(ProfileService));
    console.log(injector2.get(UserService2));
    console.log(token);
    let injector = ReflectiveInjector.resolveAndCreate([
      MandrillService

    ]);
    let mandrillService =  injector.get(MandrillService);

    console.log(mandrillService.getUser());
  }

  ngOnInit() {

  }

}
