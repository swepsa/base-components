import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, take } from 'rxjs';
import { AuthorModel, SuccessfulRequest } from '../models/common.models';



@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient
      .get<SuccessfulRequest<AuthorModel[]>>(`http://localhost:4000/authors/all`)
      .pipe(
        map(responce => { return responce.result }) , take(1) , catchError((err) => { console.log(err); return of(err) })
      );
  }

  addAuthor(name: string) {
    return this.httpClient
      .post(`http://localhost:4000/authors/add`, {
        name
      })
      .pipe(
        map((data) => {
          console.log("Add author")
        }), take(1), catchError((err) => { console.log(err); return of(err) }))
      .subscribe();
  }
}

