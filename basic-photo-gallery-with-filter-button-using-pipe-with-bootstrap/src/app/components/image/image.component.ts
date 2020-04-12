import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [`
  .img-container {
    margin: 45px auto 15px auto;
    box-shadow: #555 1px 2px 8px 1px;
    min-height: 425px;
    width: 640px;
    background-position: center;
    background-repeat: no-repeat;
    align-content: center;
  }
  #caption {
    font-size: 1.3em;
    font-family: "Open Sans", sans-serif;
    padding: 18px;
    color: #222;
    border: 2px solid #bbb;
    width: 900px;
  }
  .caption-row {
    padding: 24px;
    text-align: center;
  }`]
})
export class ImageComponent implements OnInit {

  constructor(
    //import the image service
    //1
    public imageService: ImageService,
    //importing ActivatedRoute
    private route:ActivatedRoute
  ) { }

  //declare a temporary variable that will contain the image
  //2
  image:any

  
  ngOnInit(): void {
    //3
    this.image = this.imageService.getImage(
      //the code below connects the gallery & image by getting the id
      +this.route.snapshot.params['id']
      //Contains the information about a route associated with a component loaded in an outlet at a particular moment in time. 
      //ActivatedRouteSnapshot can also be used to traverse the router state tree.
    )


  }

}
