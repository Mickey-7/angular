import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manipulate-url',
  template: `
    <h3>Manipulate URL</h3>
    <hr>
    <button (click)="request()">Submit Request</button>
    <pre>{{ response | async | json }}</pre>
  `,
  styles: [
  ]
})
export class ManipulateURLComponent implements OnInit {
  
  //invoke HttpClient
  constructor(private http : HttpClient) { }

  //create response variable with Observable type any which will store our response
  response : Observable<any>
  
  ngOnInit(): void {
  }

  //create the request method which should include part of the 
  //url from interceptor and invoke the HttpClient get method set to reponse
  request(){
    const url = "http://jsonplaceholder.typicode.com/todos/1";
    //set the response to the http get method
    this.response = this.http.get(url)
  }


}
