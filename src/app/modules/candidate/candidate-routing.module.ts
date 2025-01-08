import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandLoginComponent } from './cand-login/cand-login.component';

const routes: Routes = [
  {path: '', component: CandLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
