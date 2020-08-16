import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../_models/user";
import { environment } from "src/environments/environment.prod";
// imported manually
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  // The RxJS BehaviorSubject is a special type of Subject
  // that keeps hold of the current value and emits it to
  // any new subscribers as soon as they subscribe,

  // notifications are sent
  private currentUserSubject: BehaviorSubject<User>;
  // notified of changes
  public currentUser: Observable<User>;

  // The constructor() of the service initialises
  constructor(private http: HttpClient) {
    // the currentUserSubject with the currentUser
    // object from localStorage which enables the
    // user to stay logged in between page refreshes
    // or after the browser is closed.
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    // The public currentUser property is then set to
    // this.currentUserSubject.asObservable(); which
    // allows other components to subscribe to the
    // currentUser Observable but doesn't allow them to
    //  publish to the currentUserSubject, this is so
    // logging in and out of the app can only be done
    // via the authentication service.
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // The currentUserValue getter allows other components an
  // easy way to get the value of the currently logged in
  // user without having to subscribe to the currentUser Observable.
  get currentUserValue(): User {
    console.log("currentUserValue() - AUTHENTICATION_SERVICE");
    return this.currentUserSubject.value;
  }

  // The login() method sends the user credentials to the API
  // via an HTTP POST request for authentication.
  // If successful the user object including a JWT auth token
  // are stored in localStorage to keep the user logged
  // in between page refreshes. The user object is then
  // published to all subscribers with the call to
  // this.currentUserSubject.next(user);.
  login(username: string, password: string) {
    console.log("login() - AUTHENTICATION_SERVICE");
    return this.http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage
          // to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  // The logout() method removes the current user object
  // from local storage and publishes null to the
  // currentUserSubject to notify all subscribers that
  // the user has logged out.
  logout() {
    console.log("logout() - AUTHENTICATION_SERVICE");
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
