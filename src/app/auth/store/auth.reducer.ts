import { Action, createReducer, on } from "@ngrx/store";
import {
    requestLogin, requestLoginSuccess, requestLoginFail, requestRegister,
    requestRegisterSuccess, requestRegisterFail, requestLogout, requestLogoutSuccess
} from './auth.actions'

export const authFeatureKey = 'auth';

export interface AuthState {
    isAuthorized: boolean;
    token: string | null;
    errorMessage: string;
}

const initialState: AuthState = {
    isAuthorized: false,
    token: '',
    errorMessage: ''
}

export const reducer = createReducer(
    initialState,
    on(requestLogin, state => ({ ...state })),
    on(requestLoginSuccess, (state, { token }) => ({ ...state, token: token })),
    on(requestLoginFail, (state, { errorMessage }) => ({ ...state, errorMessage: errorMessage })),
    on(requestRegister, (state) => ({ ...state })),
    on(requestRegisterSuccess, state => ({ ...state })),
    on(requestRegisterFail, state => ({ ...state })),
    on(requestLogout, state => ({ ...state })),
    on(requestLogoutSuccess, state => ({ ...state }))
);

export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);