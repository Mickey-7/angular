import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {

  //invoke ToastrService
  constructor(private toastr : ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //check url
    if (!request.url.includes("posts")) {
      console.error("invalid url");
      return next.handle(request);
      
    }
    
    //
    console.warn("HttpInterceptor");

    return next.handle(request)
      .pipe(
        //tap. tap is a RxJS pipeable operator that returns identical Observable as source Observable 
        //and can be used to perform side effect such as logging each values emitted by source Observable 
        //use tap with input param event of HttpEvent type with any 
        tap((event : HttpEvent<any>) => {
          //check if its a valid instanceof HttpResponse 
          //and is a valid status of HttpEvent like below
          if (event instanceof HttpResponse && event.status === 201) {
            //invoke toaster
            this.toastr.success("Object created")
          }
        })
      )
  }
}
