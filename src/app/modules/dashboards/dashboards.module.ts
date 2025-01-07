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
import { TimeTableComponent } from './time-table/time-table.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { ImportantLinksComponent } from './important-links/important-links.component';
import { EventComponent } from './event/event.component';
import { AttendanceLeaveComponent } from './attendance-leave/attendance-leave.component';
import { DailyTaskComponent } from './daily-task/daily-task.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


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
    LibraryComponent,
    TimeTableComponent,
    HolidayListComponent,
    ImportantLinksComponent,
    EventComponent,
    AttendanceLeaveComponent,
    DailyTaskComponent,
    PhotoGalleryComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
