import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-purchases-line-chart',
  templateUrl: './purchases-line-chart.component.html',
  styleUrls: ['./purchases-line-chart.component.scss']
})
export class PurchasesLineChartComponent implements OnInit {

  constructor(private saftApi: SaftApiService) { }

  private purchases: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  private cumulativePurchases: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public chartDatasets: Array<any> = [];

  ngOnInit(): void {
    this.saftApi.get('api/purchases/monthly-purchases').subscribe(
      (data:Object) => {
        console.log(data)
        if('monthlyPurchases' in data) {
          this.purchases = data['monthlyPurchases'];
          this.chartDatasets = this.getChartData();
        }
      }
    );
    this.saftApi.get('api/purchases/monthly-cumulative-purchases').subscribe(
      (data:Object) => {
        if('cumulativeMonthlyPurchases' in data) {
          this.cumulativePurchases = data['cumulativeMonthlyPurchases'];
          this.chartDatasets = this.getChartData();
        }
      }
    );
  }
  
  getChartData() : Array<Object> {
    let charData = [
      { data: this.purchases, label: 'Monthly Purchases' },
      { data: this.cumulativePurchases, label: 'Cumulative Purchases' }
    ];
    return charData;
  }
}
