import { Component } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';
import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-sales-line-chart',
  templateUrl: './sales-line-chart.component.html',
  styleUrls: ['./sales-line-chart.component.scss'],
})
export class SalesLineChartComponent {
  constructor(private saftApi: SaftApiService, private webApi: ApiService) {}

  private sales: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  private cumulativeSales: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public chartDatasets: Array<any> = [];

  ngOnInit(): void {
    this.webApi.get('api/sales/revenue').subscribe((data: any) => {
      if ('revenue' in data) {
        this.sales = data['revenue'];
        this.chartDatasets = this.getChartData();
      }
    });

    this.webApi
      .get('api/sales/monthly-cumulative-sales')
      .subscribe((data: any) => {
        if ('cumulative' in data) {
          this.cumulativeSales = data['cumulative'];
          this.chartDatasets = this.getChartData();
        }
      });
  }

  getChartData(): Array<Object> {
    let charData = [
      { data: this.sales, label: 'Monthly Sales' },
      { data: this.cumulativeSales, label: 'Cumulative Sales' },
    ];
    return charData;
  }
}
