import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss', '../app.component.scss'],
})
export class OverviewComponent implements OnInit {
  private profitMargin: number = 0;
  private revenue = 0;

  constructor(private saftApi: SaftApiService) {}

  ngOnInit(): void {
    this.saftApi
      .get('api/financial/gross-profit-margin')
      .subscribe((data) => this.parseGrossProfitMargin(data));

    this.saftApi
      .get('api/sales/revenueFromSales')
      .subscribe((data) => this.parseRevenue(data));
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
}
