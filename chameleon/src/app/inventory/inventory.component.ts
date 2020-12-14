import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss', '../app.component.scss'],
})
export class InventoryComponent implements OnInit {
  constructor(private webApi: ApiService) {}

  private assetsInStock: string = '0';
  private products: any = [];

  ngOnInit(): void {
    this.webApi.get('api/inventory/total-stock').subscribe((data: Object) => {
      if ('stock' in data) {
        this.assetsInStock = (Math.round(data['stock'] * 100) / 100).toFixed(2);
      }
    });

    this.webApi
      .get('api/inventory/products-stock')
      .subscribe((data: Object) => {
        console.log(data)
        this.products = data;
      });
  }

  getStock() {
    return this.assetsInStock;
  }

  getProducts() {
    return this.products['products']
  }
}
