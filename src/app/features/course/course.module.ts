import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports:[CourseComponent],
  declarations: [CourseComponent],
})
export class CourseModule { }