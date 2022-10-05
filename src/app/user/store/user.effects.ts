import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from './user.actions'

@Injectable()
export class UserEffects {

    getCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCurrentUser),
            mergeMap(() => this.userService.getUser()
                .pipe(
                    map(user => (requestCurrentUserSuccess({ user }))),
                    catchError(() => of(requestCurrentUserFail()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}