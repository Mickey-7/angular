import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-error',
  template: `
  <h3>Error - Toastr</h3>
  <hr>
  <button mat-raised-button color="primary" (click)="submit()">Submit Wrong Request</button>
  `,
  styles: [
  ]
})
export class ErrorComponent implements OnInit {
  //invoke HttpClient
  constructor(private http : HttpClient) { }


  ngOnInit(): void {
  }

  submit() {
    this.http.get("/error").subscribe();
  }

}
