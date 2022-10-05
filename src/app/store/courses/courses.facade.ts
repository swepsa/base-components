import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { CourseModel } from "src/app/models/common.models";
import { requestAllCourses, requestCreateCourse, requestDeleteCourse, requestEditCourse, requestFilteredCourses, requestSingleCourse } from "./courses.actions";


import { CoursesState } from "./courses.reducer";
import {
    getCourses, getAllCourses, isAllCoursesLoadingSelector, isSearchingStateSelector,
    isSingleCourseLoadingSelector, getCourse, getErrorMessage
} from "./courses.selectors";

@Injectable()
export class CoursesStateFacade {
    isAllCoursesLoading$ = this.store.select(isAllCoursesLoadingSelector);
    isSingleCourseLoading$ = this.store.select(isSingleCourseLoadingSelector);
    isSearchingState$ = this.store.select(isSearchingStateSelector);
    courses$ = this.store.select(getCourses);
    allCourses$ = this.store.select(getAllCourses);
    course$ = this.store.select(getCourse);
    errorMessage$ = this.store.select(getErrorMessage);

    constructor(private store: Store<CoursesState>) { }

    getAllCourses(): void {
        this.store.dispatch(requestAllCourses());
    }

    getSingleCourse(id: string): void {
        this.store.dispatch(requestSingleCourse({ id }));
    }

    getFilteredCourses(searchValue: string): void {
        this.store.dispatch(requestFilteredCourses({ searchValue }));
    }

    editCourse(course: CourseModel, id: string): void {
        this.store.dispatch(requestEditCourse({ course, id }));
    }

    createCourse(course: CourseModel): void {
        this.store.dispatch(requestCreateCourse({ course }));
    }

    deleteCourse(id: string): void {
        this.store.dispatch(requestDeleteCourse({ id }));
    }

}