import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public data: Array<any> = [];

  @Input() public labels: Array<any> = [];

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };

  public type: any = 'line';

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

