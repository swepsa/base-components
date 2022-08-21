import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { CourseComponent } from '../course/course.component';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';


const routes: Routes = [
  {
    path: '',
    canLoad: [AuthorizedGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'add', component: CourseComponent, canActivate: [AdminGuard]},
          { path: ':id', component: CourseComponent },
          { path: 'edit/:id', component: CourseComponent, canActivate: [AdminGuard] },
          { path: '', component: CoursesComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
