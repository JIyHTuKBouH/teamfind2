import { Component } from '@angular/core';
import { LoginInfo, LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = this.loginService.isLoggedIn;
  loginInfo? : LoginInfo;
  constructor(private loginService: LoginService) {
    loginService.onLogIn().subscribe((x) => { this.isLoggedIn = x; this.loginInfo = loginService.loginInfo; });
  }


  title = 'Pupa';
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  isExpanded = false;
  isLogedin() {
    let user = localStorage.getItem("user");
    if (user == null)
      return false;
    return true
  }
}
