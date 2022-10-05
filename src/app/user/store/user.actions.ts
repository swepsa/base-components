import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/common.models';

export const requestCurrentUser = createAction(
    '[User] Current user'
);

export const requestCurrentUserSuccess = createAction(
    '[User] Current user Success',
    props<{
        user: UserModel,
    }>());

export const requestCurrentUserFail = createAction(
    '[User] Current user Failure'
);