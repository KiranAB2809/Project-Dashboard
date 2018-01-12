import { Routes} from '@angular/router';
import { HomeDashboardComponent } from '../app/components/home-dashboard/home-dashboard.component'
import {AdminComponent} from '../app/components/admin/admin.component'

export const appRoutes: Routes = [
{path: 'home', component: HomeDashboardComponent},
{path:'admin', component:AdminComponent}
]