import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  exports: [CoursesComponent]
})
export class CoursesModule { }
