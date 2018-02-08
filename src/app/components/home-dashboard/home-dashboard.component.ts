import { Component, OnInit } from '@angular/core';
// import { Highcharts } from 'angular-highcharts';
// import { chart} from 'highcharts';
import * as Highcharts from 'highcharts';
// import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  options:Object;
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
    debugger;    
    Highcharts.chart('container1',{
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'VDA<br>Server<br>Memory Capacity',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Storage Capacity',
            innerSize: '50%',
            data: [
                ['Occupied',   350],
                ['Free',       150],
                {
                    name: 'Storage Capacity',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
    
    Highcharts.chart('container', {

      title: {
          text: 'CPU Utilization'
      },
  
      subtitle: {
          // text: 'FIDO CLUP'
      },
  
      yAxis: {
          title: {
              text: 'Memory'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              pointStart: 1
          }
      },
  
      series: [{
          name: 'FIDO CLUP',
          data: [2, 2.5, 1.75, 5, 6, 3.75, 5]
      }, {
          name: 'VDA+',
          data: [2.49, 2.40, 2.97, 2.98, 3.24, 3.02, 3.81, 4.04]
      }]
  
  });
  }
}
