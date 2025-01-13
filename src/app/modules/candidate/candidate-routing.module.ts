import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandLoginComponent } from './cand-login/cand-login.component';
import { NoticeDashboardComponent } from './notice-dashboard/notice-dashboard.component';
import { QueryComponent } from './query/query.component';
import { CandResultComponent } from './cand-result/cand-result.component';
import { CandAdmissionComponent } from './cand-admission/cand-admission.component';
import { CandPaymentReceiptComponent } from './cand-payment-receipt/cand-payment-receipt.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path: '', component: CandLoginComponent},
  {path: 'notice-board', component:NoticeDashboardComponent},
  {path: 'query', component:QueryComponent},
  {path: 'result', component:CandResultComponent},
  {path: 'admission', component:CandAdmissionComponent},
  {path: 'payment-receipt' , component:CandPaymentReceiptComponent},
  {path : 'registration-form', component:RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
