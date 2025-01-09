import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandLoginComponent } from './cand-login/cand-login.component';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { QueryComponent } from './query/query.component';
import { CandResultComponent } from './cand-result/cand-result.component';
import { CandAdmissionComponent } from './cand-admission/cand-admission.component';


@NgModule({
  declarations: [CandLoginComponent,NoticeDashboardComponent,QueryComponent,CandResultComponent,CandAdmissionComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
