import { Component, OnInit } from "@angular/core";
// need to remove /public-/api
import {
  NzNotificationService,
  NzNotificationPlacement,
} from "ng-zorro-antd/notification";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styles: [],
})
export class NotificationComponent implements OnInit {
  ngOnInit(): void {}

  // for Basic Notification
  // create NzNotificationSrevice
  constructor(private notification: NzNotificationService) {}
  // need to import module on applicationCache.module.ts
  // import { NzNotificationModule } from 'ng-zorro-antd/notification';
  showNotification(): void {
    // invoke notification service
    this.notification
      .blank(
        "Notification Title",
        "This is the content of the notification. This is the content of the notification. This is the content of the notification."
      )
      .onClick.subscribe(() => {
        console.log("notif clicked!");
      });
  }

  // for Notification with icon
  // no need to create for NzNotificationService
  // as it is already created on the above constructor
  createNotification(type: string): void {
    // invoke notification service
    this.notification.create(
      type,
      "Notification Title",
      "This is the content of the notification. This is the content of the notification. This is the content of the notification. "
    );
  }

  // for Placement
  createPlacementNotification(position: NzNotificationPlacement): void {
    // invoke notification service
    this.notification.blank(
      "Notification Title",
      "This is the content of the notification. This is the content of the notification. This is the content of the notification. ",
      { nzPlacement: position }
    );
  }
}
