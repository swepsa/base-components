import { Action, createReducer, on } from "@ngrx/store";
import { CourseModel } from "src/app/models/common.models";
import {
    requestAllCourses, requestAllCoursesSuccess, requestAllCoursesFail, requestSingleCourse,
    requestSingleCourseSuccess, requestSingleCourseFail, requestFilteredCourses,
    requestFilteredCoursesSuccess, requestDeleteCourse, requestDeleteCourseFail, requestEditCourse,
    requestEditCourseSuccess, requestEditCourseFail, requestCreateCourse, requestCreateCourseSuccess,
    requestCreateCourseFail
} from './courses.actions'

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    allCourses: CourseModel[];
    courses: CourseModel[];
    course: CourseModel | undefined;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

const initialState: CoursesState = {
    allCourses: [],
    courses: [],
    course: undefined,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ""
}

export const reducer = createReducer(
    initialState,
    on(requestAllCourses, state => ({ ...state })),
    on(requestAllCoursesSuccess, (state, { courses }) => ({ ...state, allCourses: courses })),
    on(requestAllCoursesFail, state => ({ ...state })),
    on(requestSingleCourse, state => ({ ...state })),
    on(requestSingleCourseSuccess, (state, { course }) => ({ ...state, course: course })),
    on(requestSingleCourseFail, state => ({ ...state })),
    on(requestFilteredCourses, state => ({ ...state })),
    on(requestFilteredCoursesSuccess, (state, { courses }) => ({ ...state, courses: courses })),
    on(requestDeleteCourse, state => ({ ...state })),
    on(requestDeleteCourseFail, state => ({ ...state })),
    on(requestEditCourse, state => ({ ...state })),
    on(requestEditCourseSuccess, (state, { course }) => ({ ...state, course: course })),
    on(requestEditCourseFail, state => ({ ...state })),
    on(requestCreateCourse, state => ({ ...state })),
    on(requestCreateCourseSuccess, (state, { course }) => ({ ...state, course: course })),
    on(requestCreateCourseFail, state => ({ ...state }))
);

export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);