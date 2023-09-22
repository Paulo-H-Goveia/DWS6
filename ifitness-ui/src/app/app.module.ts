import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { ActivitiesModule } from './activities/activities.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    ActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
