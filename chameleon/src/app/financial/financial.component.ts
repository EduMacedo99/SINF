import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss', '../app.component.scss']
})
export class FinancialComponent implements OnInit {
  private assets: any;
  private liabilities: any;
  private equity: any;

  constructor(private saftApi: SaftApiService) { }

  ngOnInit(): void {
    this.saftApi.get('api/financial/balance-sheet').subscribe(
      (data:Object) => {
        if('assets' in data) 
          this.assets = data['assets'];
        if('liabilities' in data)
          this.liabilities = data['assets'];
        if('equity' in data)
          this.equity = data['equity'];
        console.log(data);
      }
    );
  }

  getCurrentAssets(): Array<any> {
    if (this.assets!= null && 'current' in this.assets)
      return this.assets['current'];
    return Array<any>();
  }

  getNonCurrentAssets(): Array<any> {
    if (this.assets!= null && 'nonCurrent' in this.assets)
      return this.assets['nonCurrent'];
    return Array<any>();
  }

  getTotalCurrentAssets(): number {
    if (this.assets!= null && 'totalCurrent' in this.assets)
      return Math.round(this.assets['totalCurrent']*100)/100;
    return 0;
  }

  getTotalNonCurrentAssets(): number {
    if (this.assets!= null && 'totalNonCurrent' in this.assets)
      return Math.round(this.assets['totalNonCurrent']*100)/100;
    return 0;
  }

  getTotalAssets(): number {
    if (this.assets!= null && 'total' in this.assets)
      return Math.round(this.assets['total']*100)/100;
    return 0;
  }

  getAccountsEquity(): Array<any> {
    if (this.equity!= null && 'accounts' in this.equity)
      return this.equity['accounts'];
    return Array<any>();
  }

  getTotalEquity(): number {
    if (this.equity!= null && 'total' in this.equity)
      return Math.round(this.equity['total']*100/100);
    return 0;
  }

  getCurrentLiabilities(): Array<any> {
    if (this.liabilities!= null && 'current' in this.liabilities)
      return this.liabilities['current'];
    return Array<any>();
  }

  getNonCurrentLiabilities(): Array<any> {
    if (this.liabilities!= null && 'nonCurrent' in this.liabilities)
      return this.liabilities['nonCurrent'];
    return Array<any>();
  }

  getTotalCurrentLiabilities(): number {
    if (this.liabilities!= null && 'totalCurrent' in this.liabilities)
      return Math.round(this.liabilities['totalCurrent']*100/100);
    return 0;
  }

  getTotalNonCurrentLiabilities(): number {
    if (this.liabilities!= null && 'totalNonCurrent' in this.liabilities)
      return Math.round(this.liabilities['totalNonCurrent']*100/100);
    return 0;
  }

  getTotalLiabilities(): number {
    if (this.liabilities!= null && 'total' in this.liabilities)
      return Math.round(this.liabilities['total']*100/100);
    return 0;
  }
}
