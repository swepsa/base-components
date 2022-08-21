import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestCurrentUser } from "./user.actions";
import { UserState } from "./user.reducer";
import { getName, isAdmin } from "./user.selectors";

@Injectable()
export class UserStateFacade {
    name$ = this.store.select(getName);
    isAdmin$ = this.store.select(isAdmin);

    constructor(private store: Store<UserState>) { }

    getCurrentUser(): void {
           this.store.dispatch(requestCurrentUser());
    }
}
