import { Action, createReducer, on } from "@ngrx/store";
import { AuthorModel } from "src/app/models/common.models";
import {
    requestAuthors, requestAuthorsSuccess, requestAuthorsFail, requestAddAuthor,
    requestAddAuthorSuccess, requestAddAuthorFail, resetAddedAuthor
} from './authors.actions'

export const authorsFeatureKey = 'authors';

export interface AuthorsState {
    authors: AuthorModel[];
    addedAuthor: AuthorModel | undefined;
}

const initialState: AuthorsState = {
    authors: [],
    addedAuthor: undefined
}
export const reducer = createReducer(
    initialState,
    on(requestAuthors, state => ({ ...state })),
    on(requestAuthorsSuccess, (state, { authors }) => ({ ...state, authors: authors })),
    on(requestAuthorsFail, state => ({ ...state })),
    on(requestAddAuthor, state => ({ ...state })),
    on(requestAddAuthorSuccess, (state, { author }) => ({ ...state, addedAuthor: author })),
    on(requestAddAuthorFail, state => ({ ...state })),
    on(resetAddedAuthor, state => ({ ...state }))
);

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);