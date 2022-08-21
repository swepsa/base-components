import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, filter, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept");
    //In case when request has 401 error, logout and redirect to /login.
   // https://angular.io/guide/http
    return next.handle(request);

   /*return next.handle(request).pipe(
    filter(event => event instanceof HttpResponse),
    map((event: HttpResponse<any>) => {
      if (event.status === 202) {
        this.router.navigateByUrl('/auth/validation-code');
        throw new Error('Pin code required');
      }
      return event;
    }),
    catchError(err => {
      return of(err);
    })*/
/*
    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
         return;
        }
        this.router.navigate(['login']);
      }
    }));
  );*/



/*   console.log(request);
    return next.handle(request.clone());
  }*/

/*
      //In case when request has 401 error, logout and redirect to /login.
    /*console.log(1)
      return next.handle(request).pipe(tap(() => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(2-2)
            if (err.status !== 401) {
              console.log(2)
              return;
            }
            console.log(3)
            this.router.navigate(['login']);
          }
        }));
    }
    console.log("intercept")
    return next.handle(request)
    .pipe(map((event: HttpEvent<any>) => { return event; }), catchError((httpErrorResponse: HttpErrorResponse,*/
}}
