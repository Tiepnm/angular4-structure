import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {ApiService} from "./api.service";

import {map} from "rxjs/internal/operators";

@Injectable()
export class ProfileService {

  constructor(private apiService: ApiService) {

  }

  get(username: string): Observable<any> {
    return this.apiService.get('/profiles/' + username).pipe(map((data2 :{profile : any})  => data2.profile));
  }
}
