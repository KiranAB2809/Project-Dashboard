import { Component, OnInit } from '@angular/core';
// import { Chart } from 'angular-highcharts';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
   
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

 
  
  onSelect(event) {
    console.log(event);
  }

  constructor() { 
    
  }

  ngOnInit() {
  }
  // chart = new Chart({
  //   chart:{
  //     type: 'line'
  //   },
  //   title:{
  //     text:'Memory'
  //   },
  //   credits:{
  //     enabled:false
  //   },
  //   series:[{
  //     name:'Line 1',
  //     data: [1,2,3]
  //   }]
  // });
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random()*10));
  // }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

}
