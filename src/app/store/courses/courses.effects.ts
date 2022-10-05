import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, of, tap } from "rxjs";
import { CoursesService } from "src/app/services/courses.service";
import {
    requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestFilteredCourses,
    requestFilteredCoursesSuccess, requestSingleCourse, requestDeleteCourse,
    requestSingleCourseFail, requestEditCourseFail, requestCreateCourseSuccess,
    requestSingleCourseSuccess, requestEditCourseSuccess, requestCreateCourseFail,
    requestDeleteCourseFail, requestCreateCourse,
    requestEditCourse,
} from './courses.actions'
import { CoursesStateFacade } from "./courses.facade";

@Injectable()
export class CoursesEffects {
    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAllCourses),
            mergeMap(() => this.coursesService.getAll()
                .pipe(
                    map(courses => requestAllCoursesSuccess({ courses })),
                    catchError(() => of(requestAllCoursesFail()))
                )
            )
        )
    );

    filteredCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestFilteredCourses),
            mergeMap((action) => this.coursesStateFacade.allCourses$
                .pipe(
                    map(courses => /*todo filtering action.searchValue;*/requestFilteredCoursesSuccess({ courses }))
                )
            )
        )
    );

    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestSingleCourse),
            mergeMap((action) => this.coursesService.getCourse(action.id)
                .pipe(
                    map(course => requestSingleCourseSuccess({ course })),
                    catchError(() => of(requestSingleCourseFail()))
                )
            )
        )
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestDeleteCourse),
            mergeMap((action) => this.coursesService.deleteCourse(action.id)
                .pipe(
                    map(() => requestAllCourses()),
                    catchError(() => of(requestDeleteCourseFail()))
                )
            )
        )
    );

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestEditCourse),
            mergeMap((action) => this.coursesService.editCourse(action.course)
                .pipe(
                    map((course) => requestEditCourseSuccess(course)),
                    catchError(() => of(requestEditCourseFail()))
                )
            )
        )
    );

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourse),
            mergeMap((action) => this.coursesService.createCourse(action.course)
                .pipe(
                    map((course) => requestCreateCourseSuccess(course)),
                    catchError(() => of(requestCreateCourseFail()))
                )
            )
        )
    );

    redirectToTheCoursesPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseFail),
            tap(() => this.router.navigateByUrl('courses/'))
        )
    );

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private coursesStateFacade: CoursesStateFacade,
        private router: Router,
    ) { }
}