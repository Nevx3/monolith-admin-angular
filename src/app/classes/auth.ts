import { EventEmitter } from "@angular/core";
import { User } from "../interfaces/user";

/**
 * Whenever we need to access logged user we will used this class
 */
export class Auth {

  /**
   * since we have made this property private so its not accessable to this variable 
   * so we need to create a setter to access this variable (_user).
   */
  private static _user: User; 

  static userEmitter = new EventEmitter<User>()  // event emitter 


  // setter
  static set user(user: User) {
    this._user = user;
    this.userEmitter.emit(user);   // it will emit an event that the user is changed. All the subscriber will get notified
  }
 
  // getter
  static get user(): User {
    return this._user;
  }
}
