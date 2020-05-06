import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-angular-toastr-notifications';
  //invoke ToastrService
  constructor(private toastr : ToastrService,
    //invoke ToastrService from service
    private notifyService : NotificationService
  ){}

  showToaster(){
    //invoke toastr
    this.toastr.success("Hello, I'm the toastr message from component");
  }

  showToasterFromService(){
    //invoke toastr from service
    this.notifyService.showSuccess("Data shown successfully from service!!", "Title can be change!")
  }

  showHTMLMessage(){
    this.notifyService.showHTMLMessage("<h3>this is inside h3 tag</h3>","h3 tag invoke in toastr")
  }

  showSuccessWithTimeout(){
    this.notifyService.showSuccessWithTimeout("this will exit on 3 seconds","Toaster with timeOut",3000)
  }
}
