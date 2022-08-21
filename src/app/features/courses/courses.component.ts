import { Component, Input, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/common.models';
import { AuthorsService } from 'src/app/services/authors.service';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/user/services/user.service';
import { mockedCourseList } from '..//..//../assets/mocks';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: CourseModel[] = mockedCourseList;
  @Input() userName = '';

  constructor(
    private coursesService: CoursesService,
    private authorsService: AuthorsService
  ) { }

  ngOnInit(): void {
    this.coursesService.getAll()
      .subscribe(data => {
        this.courses = data;
        this.findAuthors()
      });
  }

  findAuthors() {
    this.authorsService.getAll().subscribe(data => {
      const authors = data;
      this.courses.forEach(course =>
        course.authors.forEach(author => console.log(author)) //TODO
      )
    });

  }

}
