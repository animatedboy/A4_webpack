import {Routes, RouterModule} from '@angular/router';
import {MyApplicationsComponent} from './Components/myApplications.component'
export const MyApplicationRoutes : Routes = [
    {
        path: '',
        component:MyApplicationsComponent,
        data:{headerText:"My Applications"}
    }
];

