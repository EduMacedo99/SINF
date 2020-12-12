import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss', '../app.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private saftApi: SaftApiService) {}

  private profitMargin: number = 0;
  private accountsReceivable = 0;

  ngOnInit(): void {
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
    console.log(data);
    this.accountsReceivable = data;
  }

  public getAccountsReceivable() {
    return this.accountsReceivable;
  }
}
