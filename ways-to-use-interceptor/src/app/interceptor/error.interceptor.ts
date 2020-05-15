import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { tap, retry, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  //invoke ToastrService
  constructor(private toastr : ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //check url
    if (!request.url.includes("/error")) {
      console.error("invalid url");
      return next.handle(request);
    }

    //
    console.log("HttpInterceptor");

    return next.handle(request)
      .pipe(
        //invoke retry
        retry(2),
        //catchError is the pipeable operator and it is used within pipe function of Observable . 
        //The parameter of catchError is a function that takes error as argument and returns Observable instance
        //use catchError with input param of error with type HttpErrorResponse  
        catchError( (error : HttpErrorResponse) => {
          //check if error status is not 401
          //invoke toastr with error message
          if (error.status !== 401) {
            // 401 handled in auth.interceptor
            this.toastr.error(error.message);
          }
          //RxJS throwError operator is used to create an Observable that emits an error notification immediately and no element. 
          //throwError can be used composing with other Observable , such as in a mergeMap , switchMap etc
          return throwError(error)
        })
      ) 
  }
}
