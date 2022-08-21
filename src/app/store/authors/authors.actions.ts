import { createAction, props } from '@ngrx/store';
import { AuthorModel } from 'src/app/models/common.models';


export const requestAuthors = createAction(
    '[Authors] request'
);

export const requestAuthorsSuccess = createAction(
    '[Authors] request success',
    props<{
        authors: AuthorModel[]
    }>()
);

export const requestAuthorsFail = createAction(
    '[Authors] request fail'
);

export const requestAddAuthor = createAction(
    '[Authors] add',
    props<{
        name: string
    }>()
);

export const requestAddAuthorSuccess = createAction(
    '[Authors] add success',
    props<{
        author: AuthorModel
    }>()
);

export const requestAddAuthorFail = createAction(
    '[Authors] add fail'
);

export const resetAddedAuthor = createAction(
    '[Authors] reset added'
);
