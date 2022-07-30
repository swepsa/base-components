import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';


@NgModule({
  imports: [BrowserModule, CoursesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }