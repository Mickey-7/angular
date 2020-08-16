import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { User } from "../_models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    console.log("getAll() - USER_SERVICE");
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
}
