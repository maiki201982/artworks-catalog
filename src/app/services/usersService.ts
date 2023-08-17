import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserState } from "../interfaces/user.interfaces";
import { users } from "../mocks/users.mocks";

@Injectable({
    providedIn: 'root'
  })
export class UsersService {

    loginUser(name: string, pass: string): Observable<UserState> {
        const user = users.find((u) => u.name === name);
        if (user && user.pass === pass)
            return of({ actualUser: { name, token: user.token }});
        return of({ actualUser: { name }})
    }


}