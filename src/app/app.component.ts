import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./core/service/profile.service";
import {UserService2} from "./authen-module/service/user2.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private profileService: ProfileService) {
   // console.log(user2Service.getUser());
  }

  ngOnInit() {
    this.profileService.get('tiepnm').subscribe( data => {
      console.log(data);
      this.title = data.username;
    });
  }
}
