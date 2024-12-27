import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudDashboardComponent } from './stud-dashboard/stud-dashboard.component';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ImportantContactsComponent } from './important-contacts/important-contacts.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: 'dashboard', component: StudDashboardComponent },
  { path: 'notice',component : NoticeDashboardComponent},
  { path: 'assignment', component: AssignmentsComponent},
  {path: 'important-contact', component: ImportantContactsComponent},
  {path: "query",component:QueryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
