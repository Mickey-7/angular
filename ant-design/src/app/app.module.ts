import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";

registerLocaleData(en);

//
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { LayoutComponent } from "./layout/layout.component";
import { ButtonComponent } from "./button/button.component";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { CommentComponent } from "./comment/comment.component";
import { NzCommentModule } from "ng-zorro-antd/comment";
import { NzListModule } from "ng-zorro-antd/list";
import { NzFormModule } from "ng-zorro-antd/form";
import { TableComponent } from "./table/table.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { TypographyComponent } from "./typography/typography.component";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { ModalComponent } from "./modal/modal.component";
import { PopconfirmComponent } from "./popconfirm/popconfirm.component";
import { NotificationComponent } from "./notification/notification.component";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzMessageModule } from "ng-zorro-antd/message";
import { NzNotificationModule } from "ng-zorro-antd/notification";
import { MentionComponent } from "./mention/mention.component";
import { RateComponent } from "./rate/rate.component";
import { NzMentionModule } from "ng-zorro-antd/mention";
import { NzRateModule } from "ng-zorro-antd/rate";
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ButtonComponent,
    CommentComponent,
    TableComponent,
    TypographyComponent,
    ModalComponent,
    PopconfirmComponent,
    NotificationComponent,
    MentionComponent,
    RateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzCommentModule,
    NzListModule,
    NzFormModule,
    NzTableModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzTypographyModule,
    NzPaginationModule,
    NzModalModule,
    NzMessageModule,
    NzNotificationModule,
    NzMentionModule,
    NzRateModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
