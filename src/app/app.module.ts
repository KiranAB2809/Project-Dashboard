import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'angular-highcharts';
import { Routes, RouterModule } from '@angular/router'; 

import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { MasterComponent } from './components/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    AdminComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
