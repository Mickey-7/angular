//inititially this will contain the Pipe but for shortcut, just type a-p and select a-pipe then tab

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})

export class ImageFilterPipe implements PipeTransform {
  // array of any items (temporary storage for objects) 
  //based on the criteria (string datatype) and output could be any
  transform(items: any[], criteria: string): any {
    //return all items if criteria is all
    if(criteria==='all'){
      return items
    }else{
      //return all filtered item if the criteria (string datatype) 
      //matched the category (which is an attribute of the mock data)
      //note that the items below is an array defined above after transform
      return items.filter(item=>{
        return item.category===criteria
      })
    }
  }
}