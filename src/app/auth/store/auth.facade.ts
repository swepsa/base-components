import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthState } from "./auth.reducer";
import { getToken, isUserAuthorized, getSpecificErrorMessage } from "./auth.selectors";
import { UserModel } from "src/app/models/common.models";
import { requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister } from "./auth.actions";
import { SessionStorageService } from "../services/session-storage.service";

@Injectable()
export class AuthStateFacade {
    getToken$ = this.store.select(getToken);
    isAuthorized$ = this.store.select(isUserAuthorized);
    getLoginErrorMessage$ = this.store.select(getSpecificErrorMessage);
    getRegisterErrorMessage$ = this.store.select(getSpecificErrorMessage);

    constructor(
        private store: Store<AuthState>,
        private sessionStorageService: SessionStorageService
        ) { }

    login(body: UserModel): void {
        this.store.dispatch(requestLogin({ email: body.email, password: body.password }));
    }

    register(user: UserModel): void {
        this.store.dispatch(requestRegister({ user }));
    }

    logout(): void {
        this.store.dispatch(requestLogout());
    }

    closeSession(): void {
        this.store.dispatch(requestLogoutSuccess());
    }
 
    setAuthorization(): void {
        this.store.dispatch(requestLoginSuccess({token: this.sessionStorageService.getToken()}));
    }
}