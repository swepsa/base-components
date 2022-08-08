import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent /*implements OnInit*/ {

  courseForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      author: this.fb.array([]) ,
      newAuthor: ['', Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')],
      duration:  ['', [Validators.required, Validators.min(0)]],
      description:  ['', Validators.required],
    });
  }

  get title() { return this.courseForm.get('title')!; }
  get author() : FormArray { return this.courseForm.get('author') as FormArray; }
  get newAuthor() { return this.courseForm.get('newAuthor')!; }
  get duration() { return this.courseForm.get('duration')!; }
  get description() { return this.courseForm.get('description')!; }

  authors = ['Superman','Batman'];
  
  addToList() {
    this.authors.push(this.courseForm.value.newAuthor);
  }
  
  removeAuthorFromList(value: any) {
    this.authors = this.authors.filter(function(item) {
      return item !== value
  });
  }
 
}
