import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from 'src/app/models/common.models';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: CourseModel[] = [];
  @Input() isEditable: boolean = true;

  @Output() deleteRequest = new EventEmitter<any>();

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
  }

  showCourse(course: CourseModel) {
    this.router.navigateByUrl('courses/' + course.id);
  }

  editCourse(course: CourseModel) {
    this.router.navigateByUrl('courses/edit/' + course.id);
  }

  deleteCourse(course: CourseModel) {
    this.coursesService.deleteCourse(course.id);
  }
}
