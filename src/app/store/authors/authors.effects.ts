import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { AuthorsService } from "src/app/services/authors.service";
import { requestAuthors, requestAuthorsSuccess, requestAuthorsFail, requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess } from './authors.actions'

@Injectable()
export class AuthorsEffects {
    getAuthors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAuthors),
            mergeMap(() => this.authorsService.getAll()
                .pipe(
                    map(authors => (requestAuthorsSuccess({ authors }))),
                    catchError(() => of(requestAuthorsFail()))
                )
            )
        )
    );

    addAuthor$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAddAuthor),
            mergeMap((action) => this.authorsService.addAuthor(action.name)
                .pipe(
                    map(author => (requestAddAuthorSuccess({ author }))),
                    catchError(() => of(requestAddAuthorFail()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService
    ) { }
}