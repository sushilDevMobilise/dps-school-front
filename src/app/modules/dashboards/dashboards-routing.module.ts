import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const routes: Routes = [
  { path: 'dashboard', component: StudDashboardComponent },
  { path: 'notice',component : NoticeDashboardComponent},
  { path: 'assignment', component: AssignmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
