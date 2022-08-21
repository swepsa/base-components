import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CourseModel } from '../models/common.models';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private isLoading$$ = new BehaviorSubject<boolean>(true);
  private courses$$ = new BehaviorSubject<CourseModel[]>(new Array);
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();

  constructor(
    private coursesService : CoursesService
    ) { }

  getAll(){
    this.isLoading$$.next(true);
    this.coursesService.getAll()
      .subscribe((data) => {
        console.log("coursesService.getAll()");
        this.courses$$.next(data);
        this.isLoading$$.next(false);
        console.log(data)
      });
  }

  createCourse(courseModel: CourseModel){
    this.coursesService.createCourse(courseModel);
    this.getAll();
  }
 
  editCourse(courseModel: CourseModel){
    var result = this.coursesService.editCourse(courseModel);
    this.getAll();
    return result;
  }

  getCourse(id: string){
    return this.coursesService.getCourse(id);
  }

  deleteCourse(id: string){
    var result = this.coursesService.deleteCourse(id);
    this.getAll();
    return result;
  }
}
