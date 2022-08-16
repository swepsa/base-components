import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, of, take } from "rxjs";
import { SessionStorageService } from "./session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$ = new BehaviorSubject(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private sessionStorageService: SessionStorageService, private httpClient: HttpClient) { }

  login(email: string, password: string) {

    this.httpClient
      .post<{ result: string }>(`http://localhost:4000/login`, {
        email, password
      })
      .pipe(
        map((data) => {
          console.log("LOGIN")
          this.sessionStorageService.setToken(data.result);
          this.isAuthorized$$.next(true);
        }), take(1), catchError((err) => { console.log(err); return of(err) }))
      .subscribe();
  }

  logout() {
    const headers = new HttpHeaders().set('Authorization', <string>this.sessionStorageService.getToken());
    this.httpClient
      .delete<{ result: string }>(`http://localhost:4000/logout`, { headers })
      .pipe(take(1))
      .subscribe(() => {
        console.log("LOGOUT")
        this.sessionStorageService.deleteToken();
        this.isAuthorized$$.next(false);
      });
  }

  register(name: string, email: string, password: string) {
    this.httpClient
      .post<{ result: string }>(`http://localhost:4000/register`, {
        name, email, password
      })
      .pipe(
        map((data) => {
          console.log("REGISTRATION")
        }), take(1), catchError((err) => { console.log(err); return of(err) }))
      .subscribe();
  }
}
