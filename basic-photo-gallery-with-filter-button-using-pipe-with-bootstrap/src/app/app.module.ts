import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//automatically imported once generated
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageComponent } from './components/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
//manually import the class pipe
import { ImageFilterPipe } from './pipe/filter.pipe';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageComponent,
    GalleryComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageService ,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
