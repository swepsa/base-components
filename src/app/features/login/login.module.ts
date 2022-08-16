import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, CommonModule, FormsModule],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { 
}
