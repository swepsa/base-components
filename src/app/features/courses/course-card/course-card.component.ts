import { Component, Input, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/common.models';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: CourseModel;
  constructor() { }

  ngOnInit(): void { };
}
