import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private name$$ = new BehaviorSubject<string>("");
  private isAdmin$$ = new BehaviorSubject<boolean>(true);
  public name$ = this.name$$.asObservable();
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) { }

  getUser (){
    return this.userService.getUser()
      .subscribe((data) => {
        console.log("userService.getUser()");
        this.name$$.next(data.name);
        this.isAdmin$$.next(data.role == 'admin');
        console.log(data)
      });
  }
}
