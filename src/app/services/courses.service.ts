import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, take } from 'rxjs';
import { CourseModel, SuccessfulRequest } from '../models/common.models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<CourseModel[]> {
    return this.httpClient
      .get<SuccessfulRequest<CourseModel[]>>(`http://localhost:4000/courses/all`)
      .pipe(
        map(responce => { return responce.result }), take(1), catchError((err) => { console.log(err); return of(err) })
      );
  }

  createCourse(courseModel: CourseModel) {
    return this.httpClient
      .post<SuccessfulRequest<CourseModel>>(`http://localhost:4000/courses/add`,
        {
          "title": courseModel.title,
          "description": courseModel.description,
          "duration": courseModel.duration,
          "authors": courseModel.authors
        })
      .pipe(
        map(responce => { return responce.result }), take(1), catchError((err) => { console.log(err); return of(err) })
      );
  }

  editCourse(courseModel: CourseModel) {
    return this.httpClient
      .put<SuccessfulRequest<CourseModel>>(`http://localhost:4000/courses/` + courseModel.id,
        {
          "title": courseModel.title,
          "description": courseModel.description,
          "creationDate": courseModel.creationDate,
          "duration": courseModel.duration,
          "authors": courseModel.authors
        })
      .pipe(
        map(responce => { return responce.result }), take(1), catchError((err) => { console.log(err); return of(err) })
      );
  }

  getCourse(id: string) {
    return this.httpClient
      .get<SuccessfulRequest<CourseModel>>(`http://localhost:4000/courses/` + id)
      .pipe(
        map(responce => { return responce.result }), take(1), catchError((err) => { console.log(err); return of(err) })
      );
  }

  deleteCourse(id: string) {
    return this.httpClient
      .delete<SuccessfulRequest<CourseModel>>(`http://localhost:4000/courses/` + id)
      .pipe(
        map(responce => { return responce.result }), take(1), catchError((err) => { console.log(err); return of(err) })
      );
  }
}
