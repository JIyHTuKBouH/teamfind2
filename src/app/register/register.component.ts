import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  steamAcount? : string;
  
  
  register() {
    this.loginService.loggedIn(true, { nickName: this.steamAcount!, img: "https://i5.otzovik.com/2017/06/01/4969877/img/7811611.jpeg"})
    this.router.navigate(['/chat'])
  }
  ngOnInit(): void {
  }

}
