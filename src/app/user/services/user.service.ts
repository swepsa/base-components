import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, catchError, of } from 'rxjs';
import { SuccessfulRequest, UserModel } from 'src/app/models/common.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient
      .get<SuccessfulRequest<UserModel>>(`http://localhost:4000/users/me`)
      .pipe(
        map(responce => { return responce.result }), take(1), catchError((err) => { console.log(err); return of(err) })
      );
  }
}
