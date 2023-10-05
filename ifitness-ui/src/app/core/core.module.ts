import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../security/auth.service';
import { ActivityService } from '../activities/activity.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent
  ],
  providers: [
    AuthService,
    ActivityService
  ]
})
export class CoreModule { }
