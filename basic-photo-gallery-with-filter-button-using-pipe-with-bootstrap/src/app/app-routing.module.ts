import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//automatically adde
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';


const routes: Routes = [
  //done after components generation
  {path:"",redirectTo:"/gallery",pathMatch:"full"},
  {path:"gallery",component:GalleryComponent},
  {path:"image/:id",component:ImageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
