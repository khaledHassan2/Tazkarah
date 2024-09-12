import { Component } from '@angular/core';
import {  ChartModule } from 'angular-highcharts';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule,HighchartsChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  

  // ---------------------
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'areaspline',
      height: '264px', // Fixed height of 264px
      backgroundColor: 'transparent'
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      lineColor: '#ddd',
      tickColor: '#ddd',
      labels: {
        style: {
          color: '#666',
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      gridLineColor: '#f0f0f0',
      labels: {
        style: {
          color: '#666',
          fontSize: '12px'
        }
      },
      visible: false // Hide the y-axis if you don't need it
    },
    tooltip: {
      shared: true,
      backgroundColor: '#fff',
      borderColor: '#aaa',
      borderRadius: 8,
      shadow: true,
      style: {
        color: '#333',
        fontSize: '14px'
      },
      headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.33, // Set opacity to 33%
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 }, // Horizontal gradient
          stops: [
            [0, '#8A74F9'],
            [0.8428, 'rgba(138, 116, 249, 0.26)'],
            [1, 'rgba(138, 116, 249, 0)']
          ]
        },
        marker: {
          enabled: false,
          radius: 5,
          fillColor: '#fff',
          lineWidth: 2,
          lineColor: '#7A56FF' // Specify line color
        },
        lineWidth: 2,
        color: '#7A56FF'
      }
    },
    series: [{
      name: 'استخدام',
      data: [120, 150, 140, 130, 180, 220, 240, 250, 200, 170, 160, 210],
      type: 'areaspline'
    }]
  };
}
  