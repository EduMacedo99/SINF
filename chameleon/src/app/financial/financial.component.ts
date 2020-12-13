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

  private depreciation: any;
  private ebit: any;
  private ebitda: any;
  private expenses: any;
  private interest: any;
  private netIncome: any;
  private revenue: any;
  private taxes: any;

  constructor(private saftApi: SaftApiService) { }

  ngOnInit(): void {
    this.saftApi.get('api/financial/balance-sheet').subscribe(
      (data:Object) => {
        if('assets' in data) 
          this.assets = data['assets'];
        if('liabilities' in data)
          this.liabilities = data['liabilities'];
        if('equity' in data)
          this.equity = data['equity'];
      }
    );
    this.saftApi.get('api/financial/profit-loss').subscribe(
      (data:Object) => {
        if('depreciation' in data) 
          this.depreciation = data['depreciation'];
        if('ebit' in data)
          this.ebit = data['ebit'];
        if('ebitda' in data)
          this.ebitda = data['ebitda'];
        if('expenses' in data) 
          this.expenses = data['expenses'];
        if('interest' in data)
          this.interest = data['interest'];
        if('netIncome' in data)
          this.netIncome = data['netIncome'];
        if('revenue' in data)
          this.revenue = data['revenue'];
        if('taxes' in data)
          this.taxes = data['taxes'];
          console.log(data)
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


  getDepreciation(): Array<any> {
    if (this.depreciation!= null)
      return this.depreciation;
    return Array<any>();
  }

  getEbit(): number {
    if (this.ebit!= null)
      return this.ebit;
    return 0;
  }

  getEbitda(): number {
    if (this.ebitda!= null)
      return this.ebitda;
    return 0;
  }

  getExpenses(): Array<any> {
    if (this.expenses!= null)
      return this.expenses;
    return Array<any>();
  }

  getInterest(): Array<any> {
    if (this.interest!= null)
      return this.interest;
    return Array<any>();
  }

  getNetIncome(): number {
    if (this.netIncome!= null)
      return this.netIncome;
    return 0;
  }

  getRevenue(): Array<any> {
    if (this.revenue!= null)
      return this.revenue;
    return Array<any>();
  }

  getTaxes(): Array<any> {
    if (this.taxes!= null)
      return this.taxes;
    return Array<any>();
  }
}
