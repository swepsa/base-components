import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorModel } from '../models/common.models';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  constructor(private authorsService: AuthorsService) { }

  private isLoading$$ = new BehaviorSubject<boolean>(true);
  private authors$$ = new BehaviorSubject<AuthorModel[]>(new Array);
  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  getAll() {
    this.isLoading$$.next(true);
    this.authorsService.getAll()
      .subscribe((data) => {
        console.log("authorsService.getAll()");
        this.authors$$.next(data);
        this.isLoading$$.next(false);
      });
  }

  addAuthor(name: string) {
    this.authorsService.addAuthor(name);
    this.getAll();
  }
}
