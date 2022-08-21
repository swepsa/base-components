import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedGuard } from 'src/app/auth/guards/not-authorized.guard';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [NotAuthorizedGuard],
    component: LoginComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
