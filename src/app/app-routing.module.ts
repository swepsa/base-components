import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login-routing.module').then(m => m.LoginRoutingModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./features/registration/registration-routing.module').then(m => m.RegistrationRoutingModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses-routing.module').then(m => m.CoursesRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
