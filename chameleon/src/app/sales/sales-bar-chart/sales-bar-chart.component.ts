import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-sales-bar-chart',
  templateUrl: './sales-bar-chart.component.html',
  styleUrls: ['./sales-bar-chart.component.scss']
})
export class SalesBarChartComponent implements OnInit {

  constructor(private saftApi: SaftApiService) { }

  public values: Array<any> = [null];

  public labels: Array<any> = [null];

  public chartDatasets: Array<any> = [];

  ngOnInit(): void {
    this.saftApi.get('api/sales/sales-per-city').subscribe(
      (data:Object) => {
        console.log(data);
      }
    );
  }
  
  /*getChartData() : Array<Object> {
    let charData = [
      { data: this.sales, label: 'Monthly Sales' }
    ];
    return charData;
  }*/
}
