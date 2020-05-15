import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable,  } from 'rxjs';


@Injectable()
export class ManipulateURLInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //check if the request url includes todos/1
    if (!request.url.includes("todos/1")) {
      //snippet : ce
      console.error("invalid url");
      //handle next request
      return next.handle(request);
    }

    //snippet : cw 
    console.warn("HttpInterceptor");
    //clone request and replace http:// with https:// at the same time
    const httpClone = request.clone({
      url : request.url.replace("http://", "https://")
    })
    
    //return the cloned request by handling it on the next request
    return next.handle(httpClone);
  }
}
