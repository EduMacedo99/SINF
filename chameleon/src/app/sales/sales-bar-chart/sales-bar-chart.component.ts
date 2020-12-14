import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-sales-bar-chart',
  templateUrl: './sales-bar-chart.component.html',
  styleUrls: ['./sales-bar-chart.component.scss']
})
export class SalesBarChartComponent implements OnInit {

  constructor(private saftApi: SaftApiService) { }

  public values: Array<any> = [];

  public labels: Array<any> = [];

  private data: Array<any> = [];

  ngOnInit(): void {
    this.saftApi.get('api/sales/sales-per-city').subscribe(
      (data:any) => {
        this.data = data;
        this.values = this.getChartData();
      }
    );
  }
  
  getChartData() : Array<Object> {
    let charData:any[] = [];
    let netIncomes:any[] = [];
    let tmp:any[][] = [];
    for (const key in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, key)) {
        const city = key;
        const netTotal = this.data[key].netTotal;
        netIncomes.push(netTotal);
        tmp.push([netTotal,city]);
      }
    }
    tmp.sort(function(a, b) {
      return b[0] - a[0];
    });
    for (let i = 0; i < tmp.length; i++) {
      this.labels.push(tmp[i][1]);
    }
    netIncomes.sort(function(a, b) {
      return b - a
    });
    
    charData.push({data: netIncomes, label: 'Sales'});
    return charData;
  }
}
