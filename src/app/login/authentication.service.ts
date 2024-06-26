import { Injectable } from '@angular/core';
import { User } from './model/user';

const USER_TOKEN='user_token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?:User

  constructor() {
    if(sessionStorage.getItem(USER_TOKEN)){
      this.user= JSON.parse(sessionStorage.getItem(USER_TOKEN)!);
    }
  }

  get authenticated():boolean{
    return !!this.user;
  }

  disconnect():void{
    this.user= undefined;
    sessionStorage.clear()
  }

  authentUser(login:string, password:string):User{
    this.user =  {
      id:1,
      login:login,
      firstname:'John',
      lastname:'Doe'
    }
    sessionStorage.setItem(USER_TOKEN, JSON.stringify(this.user));
    return this.user;
  }
}
