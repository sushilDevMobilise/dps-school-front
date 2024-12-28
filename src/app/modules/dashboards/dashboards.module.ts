import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ImportantContactsComponent } from './important-contacts/important-contacts.component';
import { QueryComponent } from './query/query.component';
import { FeeComponent } from './fee/fee.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { CertificateComponent } from './certificate/certificate.component';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [
    NoticeDashboardComponent,
    StudDashboardComponent,
    AssignmentsComponent,
    ImportantContactsComponent,
    QueryComponent,
    FeeComponent,
    ReportCardComponent,
    CertificateComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
