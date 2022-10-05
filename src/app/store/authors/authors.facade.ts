import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorsState } from "./authors.reducer";
import { getAddedAuthors, getAuthors } from "./authors.selectors";

@Injectable()
export class AuthorsStateFacade {
    addedAuthor$ = this.store.select(getAddedAuthors);
    authors$ = this.store.select(getAuthors);

    constructor(private store: Store<AuthorsState>) { }

    getAuthors(): void {
        this.store.dispatch(requestAuthors());
    }

    addAuthor(name: string): void {
        this.store.dispatch(requestAddAuthor({ name }));
    }
}