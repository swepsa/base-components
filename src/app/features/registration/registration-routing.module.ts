import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedGuard } from 'src/app/auth/guards/not-authorized.guard';
import { RegistrationComponent } from './registration.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [NotAuthorizedGuard],
    component: RegistrationComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
