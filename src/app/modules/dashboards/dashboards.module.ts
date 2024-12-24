import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';


@NgModule({
  declarations: [
    NoticeDashboardComponent,
    StudDashboardComponent,
    AssignmentsComponent,
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
