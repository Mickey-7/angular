import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notify',
  template: `
  <h3>Notify - Toastr</h3>
  <hr>
  <button (click)="submit()">Submit Post Request</button>
  <pre>{{ response | async | json }}</pre>
  `,
  styles: [
  ]
})
export class NotifyComponent implements OnInit {

  //invoke HttpClient
  constructor(private http : HttpClient) { }
  
  //create response as Observabletype with <any> for response storage
  response : Observable<any>;

  ngOnInit(): void {
  }

  //create submit method that set the response to http.post method
  submit(){
    //creating obejct to be posted
    var body = {
      title : "foo",
      body : "bar",
      useId : 1
    };
    //define url and invoke the response then set it to http 
    //post together with the url & body to be posted
    const url = "https://jsonplaceholder.typicode.com/posts";
    this.response = this.http.post(url,body);
  }

}
