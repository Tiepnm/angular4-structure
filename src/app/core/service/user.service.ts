import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
@Injectable()
export class UserService implements BaseService {
  user: any;

  setUser(newUser) {
    this.user = newUser;

  }

  getUser(): any {
    return this.user;
  }
}
