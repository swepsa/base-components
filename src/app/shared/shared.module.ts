import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent, ButtonComponent, HeaderComponent, SearchComponent } from './components/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

var components = [InfoComponent, ButtonComponent, HeaderComponent, SearchComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, NgbModule, FontAwesomeModule],
  exports: components
})
export class SharedModule {
}