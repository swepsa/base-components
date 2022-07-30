import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent, CoursesComponent, LoginComponent, RegistrationComponent } from './components/index';


var components = [CourseComponent, CoursesComponent, LoginComponent, RegistrationComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class SharedModule {
}
