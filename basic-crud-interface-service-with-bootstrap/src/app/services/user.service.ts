import { Injectable } from "@angular/core";
import { User } from "../interface/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  //importing User[] interface to make sure that the input on array of objects
  //which is dummyDataUser will have correct data types based on User[] interface
  private dummyDataUser: User[] = [
    {
      id: 1,
      firstName: "Durgesh",
      lastName: "Pal"
    },
    {
      id: 2,
      firstName: "Ankur",
      lastName: "Pal"
    }
  ];

  constructor() {}

  //creating CRUD service

  //create
  //user input that must comply with user interface
  addUser(user: User) {
    user.id = this.dummyDataUser.length + 1;
    //adding the input user to existing array of user objects which is the dummyDataUser
    this.dummyDataUser.push(user);
  }

  //read
  //no input but expecting an array of objects of users that must comply with user interface
  getUsersFromData(): User[] {
    return this.dummyDataUser;
  }

  //update
  updateUser(user: User) {
    let index = this.dummyDataUser.findIndex(x => user.id === x.id);
    this.dummyDataUser[index] = user;
  }

  //delete
  //user input that must comply with user interface
  deleteUser(user: User) {
    this.dummyDataUser.splice(this.dummyDataUser.indexOf(user), 1);
  }
}
