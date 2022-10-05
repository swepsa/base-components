import { Action, createReducer, on } from "@ngrx/store";
import { requestCurrentUser, requestCurrentUserSuccess, requestCurrentUserFail } from '../store/user.actions'

export const userFeatureKey = 'user';

export interface UserState {
    isAdmin: boolean;
    name: string;
}

const initialState: UserState = {
    isAdmin: false,
    name: ''
}

export const reducer = createReducer(
    initialState,
    on(requestCurrentUser, state => ({ ...state })),
    on(requestCurrentUserSuccess, (state, { user }) => ({
        ...state,
        isAdmin: user.role == 'admin', name: user.name
    })),
    on(requestCurrentUserFail, (state) => ({ ...state }))
);

export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);