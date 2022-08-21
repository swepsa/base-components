import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/common.models';

export const requestLogin = createAction(
    '[Auth] Login request',
    props<{
        email: string, password: string
    }>()
);

export const requestLoginSuccess = createAction(
    '[Auth] Login success',
    props<{
        token: string | null
    }>()
);

export const requestLoginFail = createAction(
    '[Auth] Login fail',
    props<{
        errorMessage: string
    }>()
);

export const requestRegister = createAction(
    '[Auth] Register',
    props<{
        user: UserModel
    }>()
);

export const requestRegisterSuccess = createAction(
    '[Auth] Register success'
);

export const requestRegisterFail = createAction(
    '[Auth] Register fail'
);

export const requestLogout = createAction(
    '[Auth] Logout'
);

export const requestLogoutSuccess = createAction(
    '[Auth] Logout success'
);
