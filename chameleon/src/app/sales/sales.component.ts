import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss', '../app.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private saftApi: SaftApiService) {}

  private lineChart: LineChartComponent = new LineChartComponent;
  private profitMargin: number = 0;
  private accountsReceivable = 0;
  private sales: any;
  private data: Array<Array<any>> = [];
  private labels: any = [{'label':'Monthly Sales'},{'label':'Cumulative'}];

  ngOnInit(): void {
    this.saftApi.get('api/sales/monthly-cumulative-sales').subscribe(
      (data:Object) => {
        if('sales' in data) {
          this.sales = data['sales'];
          this.data.push(this.sales);
        }
      }
    );
    this.saftApi
      .get('api/financial/gross-profit-margin')
      .subscribe((data) => this.parseGrossProfitMargin(data));

    this.saftApi
      .get('api/financial/accounts-receivable')
      .subscribe((data) => this.parseAccountsReceivable(data));
  }

  private parseGrossProfitMargin(data: any) {
    this.profitMargin = Math.round(data * 1000) / 10;
  }

  public getGrossProfitMargin() {
    return this.profitMargin;
  }

  private parseAccountsReceivable(data: any) {
    this.accountsReceivable = data;
  }

  public getAccountsReceivable() {
    return this.accountsReceivable;
  }

  public getSales() {
    return this.sales;
  }
}
