import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../service/loader.service';
import { delay,finalize } from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  // invoke Injector to get the LoaderService
  constructor(private injector : Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //check for the url
    if (!request.url.includes("albums")) {
      //snippet : ce
      console.error("invalid url");
      //handle next request
      return next.handle(request)
    }

    //snippet : cw 
    console.warn("HttpInterceptor");
    //invoking injector with .get() method for LoaderService
    const loaderService = this.injector.get(LoaderService);
    //invoking the show() method from LoaderService
    loaderService.show();

    //return request by next.handle() with pipe that contains some delay
    return next.handle(request)
      .pipe(
        delay(3000),
        // invoking hide() method from LoaderService
        finalize( () => loaderService.hide() )
      );
  }
}
