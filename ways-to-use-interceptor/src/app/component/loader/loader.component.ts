import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'src/app/service/loader.service';


@Component({
  selector: 'app-loader',
  template: `
    <h3>Loader</h3>
    <hr>
    <button (click)="request()">Submit Request</button>
    <pre>{{ response | json }}</pre>
    <!-- invoking loaderService with showLoader initially set to false  -->
    <!-- snippet : a-ngI -->
    <div *ngIf="loaderService.showLoader" class="loader"></div>
  `,
  styles: [
    `
      .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 100px;
        height: 100px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    
    `
  ]
})
export class LoaderComponent implements OnInit {

  //create response storage
  response

  //invoke HttpClient & LoaderService
  constructor(private http : HttpClient, public loaderService : LoaderService) { }

  ngOnInit(): void {
  }

  //create the request method which should include part of the 
  //url from interceptor and invoke the HttpClient get method
  request(){
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    this.http.get(url).subscribe(data=>(
      // set the response to subscribe data
      this.response = data
    ));
  }




}
