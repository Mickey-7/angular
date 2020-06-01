import { Component, OnInit } from "@angular/core";
// manually imported
import { NzMessageService } from "ng-zorro-antd/message";
@Component({
  selector: "app-popconfirm",
  templateUrl: "./popconfirm.component.html",
  styles: [
    `
      .spacer {
        margin: 8px;
      }
    `,
  ],
})
export class PopconfirmComponent implements OnInit {
  ngOnInit(): void {}

  // create NzMessageService
  constructor(private messageService: NzMessageService) {}
  // but must first import below on applicationCache.module.ts
  // import { NzMessageModule } from 'ng-zorro-antd/message';
  confirm(): void {
    // invoke the service
    this.messageService.info("Click confirm");
  }
  cancel(): void {
    //   // invoke the service
    this.messageService.info("Click cancel");
  }
}
