import { Component, OnInit } from '@angular/core';

import { SaftApiService } from 'src/app/saftApi/saft-api.service';
import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss', '../app.component.scss'],
})
export class PurchasesComponent implements OnInit {
  constructor(private saftApi: SaftApiService, private webApi: ApiService) {}

  private accountsPayable = 0;
  private totalPurchases = 0;
  private purchasesList: any = [];
  private suppliers: any = [];

  ngOnInit(): void {
    this.saftApi
      .get('api/purchases/accounts-payable')
      .subscribe((data) => this.parsePayable(data));

    this.webApi
      .get('api/purchases/total-purchases')
      .subscribe((data: Object) => {
        if ('totalPurchases' in data) {
          this.totalPurchases = data['totalPurchases'];
        }
      });

    this.webApi.get('api/purchases/orders').subscribe((data: Object) => {
      this.purchasesList = data;
    });

    this.webApi.get('api/purchases/suppliers').subscribe((data: Object) => {
      this.suppliers = data;
    });
  }

  private parsePayable(data: any) {
    this.accountsPayable = data;
  }

  public getPayable() {
    return this.accountsPayable;
  }

  public getTotalPurchases() {
    return this.totalPurchases;
  }

  public getPurchasesList() {
    return this.purchasesList['purchasesList'];
  }

  public getPurchasesProductsList(purchase:any) {
    return purchase['products'];
  }

  public getSuppliers() {
    return this.suppliers['suppliers'];
  }
}
