import {InjectionToken} from "@angular/core";
import {UserService} from "./user.service";
export interface BaseService{}
export declare const userService: InjectionToken<BaseService>;
export const TOKEN =
  new InjectionToken('tree-shakeable token',
    { providedIn: 'root', factory: () =>
      new UserService()});

export interface AppConfig  {
  apiEndpoint: string;
  title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};

export const TOKEN2 =
  new InjectionToken('desc', { providedIn: 'root', factory: () => HERO_DI_CONFIG})
