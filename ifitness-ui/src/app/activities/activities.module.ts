import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

@NgModule({
  declarations: [
    ActivitiesListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    ActivitiesListComponent
  ]
})
export class ActivitiesModule { }
