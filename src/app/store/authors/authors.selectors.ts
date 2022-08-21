import { AuthorsState } from "./authors.reducer";

export const getAddedAuthors = (state: AuthorsState) => state.addedAuthor;
export const getAuthors = (state: AuthorsState) => state.authors;