import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { requestLogin, requestLoginFail, requestLoginSuccess } from "./auth.actions";
import { AuthService } from "../services/auth.service";



@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestLogin),
            mergeMap(({ email, password }) => this.authService.login(email, password)
                .pipe(
                    map(token => (requestLoginSuccess({ token }))),
                    catchError((errorMessage) => of(requestLoginFail({ errorMessage })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}