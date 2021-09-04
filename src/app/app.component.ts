import { Component } from '@angular/core';
import { UserService } from './userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  weatherapp = 'Guest';
  constructor(private userService:UserService) {
  }
  ngOnInit() {
    this.weatherapp = this.userService.loggedIn ? ` ${this.userService.userName}` : 'Guest'
  }
}
