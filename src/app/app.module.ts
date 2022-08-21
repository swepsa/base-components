import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { CourseModule } from './features/course/course.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';

@NgModule({
  imports: [BrowserModule, FontAwesomeModule, NgbModule, AppRoutingModule, HttpClientModule,
    CoursesModule, LoginModule, RegistrationModule, CourseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide:HTTP_INTERCEPTORS, 
    useClass: TokenInterceptor,
    multi: true
  }]
})

export class AppModule { }