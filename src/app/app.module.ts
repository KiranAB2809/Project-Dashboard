import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
