import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loginInfo? : LoginInfo = undefined;

  isLoggedIn = false;

  public onLogIn(): Observable<boolean> {

    return this.refresh.asObservable();
  }

  public loggedIn(value: boolean, info?: LoginInfo): void {
    this.isLoggedIn = value;
    this.loginInfo = info;
    this.refresh.next(value);
  }

}


export interface LoginInfo {
  img: string,
  nickName: string
}
