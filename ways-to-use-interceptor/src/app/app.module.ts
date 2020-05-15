import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import { ManipulateURLComponent } from './component/manipulate-url/manipulate-url.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {ManipulateURLInterceptor} from './interceptor/manipulate-url.interceptor';
import { LoaderComponent } from './component/loader/loader.component'; 
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { NotifyComponent } from './component/notify/notify.component';
import { NotifyInterceptor } from './interceptor/notify.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ErrorComponent } from './component/error/error.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ManipulateURLComponent,
    LoaderComponent,
    NotifyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ManipulateURLInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoaderInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : NotifyInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ErrorInterceptor,
      multi : true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
