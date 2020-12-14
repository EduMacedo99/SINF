import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() public data: any[] = [];

  @Input() public labels: any[] = [];

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };

  public type: any = 'bar';

  public colors: Array<any> = [
    { // blue
      backgroundColor: ' #20689f73',
      borderColor: '#20689f',
      pointBackgroundColor: '#20689f',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#20689f'
    },
    { // green
      backgroundColor: ' #209f797c',
      borderColor: ' #209f79',
      pointBackgroundColor: ' #209f79',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: ' #209f79'
    }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}