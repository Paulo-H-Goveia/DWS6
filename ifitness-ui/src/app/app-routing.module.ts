import { LoginFormComponent } from './security/login-form/login-form.component';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'activities', component: ActivitiesListComponent},
  { path: 'login', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
