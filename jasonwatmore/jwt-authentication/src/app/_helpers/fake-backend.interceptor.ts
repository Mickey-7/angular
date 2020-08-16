import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { User } from "../_models/user";
import { mergeMap, materialize, delay, dematerialize } from "rxjs/operators";

// In order to run and test the Angular application without a real backend API,
// the example uses a fake backend that intercepts the HTTP requests from the
// Angular app and send back "fake" responses.

// This is done by a class that implements the Angular HttpInterceptor
// interface, for more information on Angular HTTP Interceptors see
// https://angular.io/api/common/http/HttpInterceptor or this article.

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    // change default unknown to any
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // deconstruct request
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return (
      of(null)
        .pipe(mergeMap(handleRoute))
        // call materialize and dematerialize to ensure delay
        // even if an error is thrown
        // (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );

    // The fake backend contains a handleRoute function that checks
    // if the request matches one of the faked routes in the switch statement,
    // at the moment this includes POST requests to the /users/authenticate
    // route for handling authentication,
    // and GET requests to the /users route for getting all users.
    function handleRoute() {
      switch (true) {
        case url.endsWith("/users/authenticate") && method === "POST":
          return authenticate();
        case url.endsWith("/users") && method === "GET":
          return getUsers();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // Requests to the authenticate route are handled by the authenticate()
    // function which checks the username and password against an array
    // of hardcoded users.
    // If the username and password are correct then an ok response is
    // returned with the user details and a fake jwt token,
    // otherwise an error response is returned.

    // route functions
    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) {
        return error("Username or password is incorrect");
      }
      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: "fake-jwt-token",
      });
    }

    // Requests to the get users route are handled by the getUsers() function
    // which checks if the user is logged in by calling the new isLoggedIn()
    // helper function.
    // If the user is logged in an ok() response with the whole users array
    // is returned, otherwise a 401 Unauthorized response is returned by
    // calling the new unauthorized() helper function.

    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    // helper functions

    function error(message) {
      return throwError({ error: { message } });
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function isLoggedIn() {
      return headers.get("Authorization") === "Bearer fake-jwt-token";
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorized" } });
    }
  }
}

// manually created
export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};

const users: User[] = [
  {
    id: 1,
    username: "test",
    password: "test",
    firstName: "Test",
    lastName: "User",
  },
];
