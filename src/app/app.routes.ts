import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { CandFullComponent } from './layouts/cand-full/cand-full.component';

export const routes: Routes = [
    {   
        path:'',
        component:FullComponent,
        loadChildren:() =>  import('./modules/dashboards/dashboards.module').then(m  =>  m.DashboardsModule)
    },
    {
        path: 'candidate',
        component: CandFullComponent,
        loadChildren: () => import('./modules/candidate/candidate.module').then((m) => m.CandidateModule)
    },
];
