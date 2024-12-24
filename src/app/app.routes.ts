import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
    {   
        path:'',
        component:FullComponent,
        loadChildren:() =>  import('./modules/dashboards/dashboards.module').then(m  =>  m.DashboardsModule)
    }
];
