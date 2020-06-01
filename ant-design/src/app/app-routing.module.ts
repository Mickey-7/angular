import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonComponent } from "./button/button.component";
import { TableComponent } from "./table/table.component";
import { CommentComponent } from "./comment/comment.component";
import { TypographyComponent } from "./typography/typography.component";

import { ModalComponent } from "./modal/modal.component";
import { PopconfirmComponent } from "./popconfirm/popconfirm.component";
import { NotificationComponent } from "./notification/notification.component";
import { MentionComponent } from "./mention/mention.component";
import { RateComponent } from "./rate/rate.component";

const routes: Routes = [
  { path: "button", component: ButtonComponent },
  { path: "typography", component: TypographyComponent },
  { path: "mention", component: MentionComponent },
  { path: "rate", component: RateComponent },
  {
    path: "table",
    component: TableComponent,
  },
  { path: "comment", component: CommentComponent },
  { path: "modal", component: ModalComponent },
  { path: "popconfirm", component: PopconfirmComponent },
  { path: "notification", component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
