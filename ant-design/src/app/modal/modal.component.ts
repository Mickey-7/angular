import { Component, OnInit } from "@angular/core";
// remove /public-api on the import below
// as it is auto generated bnut does not exist
import { NzModalService, NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styles: [
    `
      .spacer {
        margin-left: 24px;
      }
    `,
  ],
})
export class ModalComponent implements OnInit {
  ngOnInit(): void {}

  // for Basic Modal
  // create isVisible of boolean type to open modal
  basicVisible = false;
  basicModal(): void {
    this.basicVisible = true;
  }
  basicModalCancel(): void {
    console.log("canceled clicked");
    this.basicVisible = false;
  }
  basicModalOk(): void {
    console.log("ok clicked");
    this.basicVisible = false;
  }

  // for Customize Footer
  // create isVisibleCustom of boolean type to open modal
  customVisible = false;
  customModal(): void {
    // trigger to show custom modal
    this.customVisible = true;
  }
  // create loading for delay effect
  loading = false;
  customModalOk(): void {
    // trigger loading
    this.loading = true;
    // delay
    setTimeout(() => {
      // remove modal display
      this.customVisible = false;
      // remove loading display
      this.loading = false;
      // for 3 seconds
    }, 3000);
  }
  customModalCancel(): void {
    this.customVisible = false;
  }

  // for Information Modal Dialog
  constructor(private modal: NzModalService) {}
  // for info
  info(): void {
    this.modal.info({
      nzTitle: "This is a notification message",
      nzContent: "some content...some content",
      nzOnOk: () => console.log("Info Ok"),
    });
  }
  success(): void {
    this.modal.success({
      nzTitle: "This is a success message",
      nzContent: "some content...some content",
      nzOnOk: () => console.log("Success Ok"),
    });
  }
  error(): void {
    this.modal.error({
      nzTitle: "This is a error message",
      nzContent: "some content...some content",
      nzOnOk: () => console.log("Error Ok"),
    });
  }
  warning(): void {
    this.modal.warning({
      nzTitle: "This is a warning message",
      nzContent: "some content...some content",
      nzOnOk: () => console.log("Warning Ok"),
    });
  }

  // for Confirmation Dialog
  // no need to declare for constructor as it is
  // already defined abover on Information Modal Dialog
  // constructor(private modal: NzModalService) {}
  showConfirm(): void {
    this.modal.confirm({
      nzTitle: "Do you want to delete these items?",
      nzContent: "Some descriptions",
      nzOnOk: () => console.log("OK"),
    });
  }
}
