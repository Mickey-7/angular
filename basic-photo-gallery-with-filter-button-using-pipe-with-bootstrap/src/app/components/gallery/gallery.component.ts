import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [`
  ul {
    padding: 0;
    width: 1288px;
    margin: 28px auto;
  }
  li{
    display: inline;
  }
  .tn{
    margin: 6px;
    border: 4px solid #eee;
    box-shadow: #555 1px 1px 8px 1px;
  }
  `]
})
export class GalleryComponent implements OnInit {
  //1st
  //title after the navbar
  title = 'Recent Photos'
  //temporary storage of the images
  visibleImages:any[]=[]
  
  constructor(
    //2nd
    //invoking the image service created to get all images
    public imageService: ImageService) {
      this.visibleImages = imageService.getImages()
     }

  ngOnInit(): void {
    //3rd
        //invoking the image service created to get all images on initialization
    this.visibleImages = this.imageService.getImages()
  }

//How to use @Input() 
// To use the @Input() decorator in a child component class, 
// first import Input and then decorate the property with @Input():

// In the CHILD
// => src/app/item-detail/item-detail.component.ts
// import { Component, Input } from '@angular/core'; // First, import Input
// export class ItemDetailComponent {
//   @Input() item: string; // decorate the property with @Input()
// }

// => src/app/item-detail/item-detail.component.html
// <p>
//   Today's item: {{item}}
// </p>

// In the PARENT
// => src/app/app.component.html
// <app-item-detail [item]="currentItem"></app-item-detail>

// => src/app/app.component.ts
// export class AppComponent {
//   currentItem = 'Television';
// }

// my own conclusion: PARENT=>(INPUT)=>CHILD

// ---------------------------------------------

// How to use @Output()
// Use the @Output() decorator in the child component or directive 
// to allow data to flow from the child out to the parent.
// An @Output() property should normally be initialized to an 
// Angular EventEmitter with values flowing out of the component as events.

// In the CHILD
// First, be sure to import Output and EventEmitter in the child component class:
// import { Output, EventEmitter } from '@angular/core';

// => src/app/item-output/item-output.component.ts
// @Output() newItemEvent = new EventEmitter<string>();

// The different parts of the above declaration are as follows:
// 1) @Output()—a decorator function marking the property as a way for data to go from the child to the parent
// 2) newItemEvent—the name of the @Output()
// 3) EventEmitter<string>—the @Output()'s type
// 4) new EventEmitter<string>()—tells Angular to create a new event emitter 
//    and that the data it emits is of type string. The type could be any type, 
//    such as number, boolean, and so on. For more information on EventEmitter, 
//    see the EventEmitter API documentation.

// Next, create an addNewItem() method in the same component class:

// => src/app/item-output/item-output.component.ts
// export class ItemOutputComponent {

//   @Output() newItemEvent = new EventEmitter<string>();
//   addNewItem(value: string) {
//     this.newItemEvent.emit(value);
//   }
// }

// => src/app/item-output/item-output.component.html
// <label>Add an item: <input #newItem></label>
// <button (click)="addNewItem(newItem.value)">Add to parent's list</button>

// The second element is a <button> with an event binding. 
// You know it's an event binding because the part to the left of the equal sign is in parentheses, (click).
// The (click) event is bound to the addNewItem() method in the child component class 
// which takes as its argument whatever the value of #newItem is.
// Now the child component has an @Output() for sending data to the parent and a method for raising an event. 
// The next step is in the parent.

// In the PARENT
// In this example, the parent component is AppComponent, 
// but you could use any component in which you could nest the child.
// The AppComponent in this example features a list of items in an array 
// and a method for adding more items to the array.

// => src/app/app.component.ts
// export class AppComponent {
//   items = ['item1', 'item2', 'item3', 'item4'];
//   addItem(newItem: string) {
//     this.items.push(newItem);
//   }
// }

// The addItem() method takes an argument in the form of a string and 
// then pushes, or adds, that string to the items array.

// In the parent's template
// Next, in the parent's template, bind the parent's method to the child's event.
// Put the child selector, here <app-item-output>, within the parent component's template, app.component.html.

// => src/app/app.component.html
// <app-item-output (newItemEvent)="addItem($event)"></app-item-output>

// The event binding, (newItemEvent)='addItem($event)', tells Angular to connect the event in the child, 
// newItemEvent, to the method in the parent, addItem(), and that the event that the child is notifying 
// the parent about is to be the argument of addItem(). In other words, this is where the actual 
// hand off of data takes place. The $event contains the data that the user types into the <input> in the child template UI.

// Now, in order to see the @Output() working, add the following to the parent's template:
// <ul>
//   <li *ngFor="let item of items">{{item}}</li>
// </ul>

// The *ngFor iterates over the items in the items array. 
// When you enter a value in the child's <input> and click the button, 
// the child emits the event and the parent's addItem() method pushes the value 
// to the items array and it renders in the list.

// my own interpretation: PARENT<=(OUTPUT)<=CHILD

//declaring decorator @Input() filterBy with string datatype default to all
//to initially display all images
//4
@Input() filterBy?: string='all'


}
