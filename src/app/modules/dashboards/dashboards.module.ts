import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ImportantContactsComponent } from './important-contacts/important-contacts.component';
import { QueryComponent } from './query/query.component';


@NgModule({
  declarations: [
    NoticeDashboardComponent,
    StudDashboardComponent,
    AssignmentsComponent,
    ImportantContactsComponent,
    QueryComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
