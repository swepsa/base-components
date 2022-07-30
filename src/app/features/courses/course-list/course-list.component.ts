import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: any[] = [];
  @Input() isEditable: boolean = true;
  
  @Output() deleteRequest = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
