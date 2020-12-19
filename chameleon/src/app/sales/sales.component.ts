import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';
import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss', '../app.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private saftApi: SaftApiService, private webApi: ApiService) {}

  private profitMargin: number = 0;
  private accountsReceivable = 0;
  public sales: Array<any> = [];
  private revenue = 0;
  private products = [];

  ngOnInit(): void {
    this.saftApi
      .get('api/financial/gross-profit-margin')
      .subscribe((data) => this.parseGrossProfitMargin(data));

    this.saftApi
      .get('api/financial/accounts-receivable')
      .subscribe((data) => this.parseAccountsReceivable(data));

    this.webApi.get('api/sales/revenue-from-sales').subscribe((data: any) => {
        this.revenue = data;
    });

    this.webApi.get('api/sales/top-products').subscribe((data: any) => {
      this.parseProducts(data)
    });
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

  public getRevenue() {
    return this.revenue;
  }

  public getProducts() {
    return this.products;
  }

  private parseProducts(data: any) {
    this.products = data;
  }
}
