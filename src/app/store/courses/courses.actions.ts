import { createAction, props } from '@ngrx/store';
import { CourseModel } from 'src/app/models/common.models';

export const requestAllCourses = createAction(
    '[Courses] get all'
);

export const requestAllCoursesSuccess = createAction(
    '[Courses] get all success',
    props<{
        courses: CourseModel[]
    }>()
);

export const requestAllCoursesFail = createAction(
    '[Courses] get all fail'
);

export const requestSingleCourse = createAction(
    '[Courses] get course',
    props<{
        id: string
    }>()
);

export const requestSingleCourseSuccess = createAction(
    '[Courses] get course success',
    props<{
        course: CourseModel
    }>()
);

export const requestSingleCourseFail = createAction(
    '[Courses] get course fail'
);

export const requestFilteredCourses = createAction(
    '[Courses] get filtered course',
    props<{
        searchValue: string
    }>()
);

export const requestFilteredCoursesSuccess = createAction(
    '[Courses] get filtered course success',
    props<{
        courses: CourseModel[]
    }>()
);

export const requestDeleteCourse = createAction(
    '[Courses] delete course',
    props<{
        id: string
    }>()
);

export const requestDeleteCourseFail = createAction(
    '[Courses] delete course fail'
);

export const requestEditCourse = createAction(
    '[Courses] edit course',
    props<{
        course: CourseModel;
        id: string;
    }>()
);

export const requestEditCourseSuccess = createAction(
    '[Courses] edit course success',
    props<{
        course: CourseModel
    }>()
);

export const requestEditCourseFail = createAction(
    '[Courses] edit course fail'
);

export const requestCreateCourse = createAction(
    '[Courses] create course',
    props<{
        course: CourseModel
    }>()
);

export const requestCreateCourseSuccess = createAction(
    '[Courses] create course success',
    props<{
        course: CourseModel
    }>()
);

export const requestCreateCourseFail = createAction(
    '[Courses] create course fail'
);
