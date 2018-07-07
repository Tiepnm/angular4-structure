
import {Injectable} from "@angular/core";
import {BaseService} from "../../core/service/base.service";
import {AuthenModuleModule} from "../authen-module.module";
@Injectable({
  providedIn: AuthenModuleModule
})

export class UserService2 implements BaseService {
  user: any;

  setUser(newUser) {
    this.user = newUser;

  }

  getUser(): any {
    return this.user;
  }
}


