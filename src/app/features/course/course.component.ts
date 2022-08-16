import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder } from '@angular/forms'
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseForm: FormGroup;
  id: string | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private coursesService: CoursesService) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      author: this.fb.array([]),
      newAuthor: ['', Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')],
      duration: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.coursesService.getCourse(this.id)
        .subscribe(course => {
          this.title?.setValue(course.title);
          // this.author?.setValue(course.authors); TODO
          this.duration?.setValue(course.duration);
          this.description?.setValue(course.description);
          this.authors = course.authors;
        });
    }

  }

  get title() { return this.courseForm.get('title')!; }
  get author(): FormArray { return this.courseForm.get('author') as FormArray; }
  get newAuthor() { return this.courseForm.get('newAuthor')!; }
  get duration() { return this.courseForm.get('duration')!; }
  get description() { return this.courseForm.get('description')!; }

  authors: string[] = [];

  addToList() {
    this.authors.push(this.courseForm.value.newAuthor);
  }

  removeAuthorFromList(value: any) {
    this.authors = this.authors.filter(function (item) {
      return item !== value
    });
  }

  onFormSubmit(a: any) {
    console.log("onFormSubmit")
  }
}
