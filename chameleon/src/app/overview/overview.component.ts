import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';
import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss', '../app.component.scss'],
})
export class OverviewComponent implements OnInit {
  private profitMargin: number = 0;
  private revenue = 0;
  private totalPurchases = 0;

  constructor(private saftApi: SaftApiService, private webApi: ApiService) {}

  ngOnInit(): void {
    this.saftApi
      .get('api/financial/gross-profit-margin')
      .subscribe((data) => this.parseGrossProfitMargin(data));

    this.saftApi
      .get('api/sales/revenueFromSales')
      .subscribe((data) => this.parseRevenue(data));

    this.webApi
      .get('api/purchases/total-purchases')
      .subscribe((data: Object) => {
        if ('totalPurchases' in data) {
          this.totalPurchases = data['totalPurchases'];
        }
      });
  }

  private parseGrossProfitMargin(data: any) {
    this.profitMargin = Math.round(data * 1000) / 10;
  }

  public getGrossProfitMargin() {
    return this.profitMargin;
  }

  private parseRevenue(data: any) {
    this.revenue = data;
  }

  public getRevenue() {
    return this.revenue;
  }

  public getTotalPurchases() {
    return this.totalPurchases;
  }
}
