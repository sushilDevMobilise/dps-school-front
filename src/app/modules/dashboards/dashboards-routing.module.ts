import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
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

const routes: Routes = [
  { path: 'dashboard', component: StudDashboardComponent },
  { path: 'notice',component : NoticeDashboardComponent},
  { path: 'assignment', component: AssignmentsComponent},
  {path: 'important-contact', component: ImportantContactsComponent},
  {path: "query",component:QueryComponent},
  {path: 'fee' , component:FeeComponent},
  {path: 'report-card' , component:ReportCardComponent},
  {path: 'certificate' , component:CertificateComponent},
  {path: 'library' , component:LibraryComponent},
  {path: 'time-table' , component:TimeTableComponent},
  {path: 'holiday' , component:HolidayListComponent},
  {path: 'important-links', component:ImportantLinksComponent},
  {path: 'event' , component:EventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
