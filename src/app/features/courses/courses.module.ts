import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [],
  imports: [SharedModule, CommonModule],
  exports: [CoursesComponent]
})
export class CoursesModule { }
