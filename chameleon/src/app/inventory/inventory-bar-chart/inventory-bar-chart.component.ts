import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/webApi/web-api.service';

@Component({
  selector: 'app-inventory-bar-chart',
  templateUrl: './inventory-bar-chart.component.html',
  styleUrls: ['./inventory-bar-chart.component.scss']
})
export class InventoryBarChartComponent implements OnInit {

  constructor(private webApi: ApiService) { }

  public values: Array<any> = [];

  public labels: Array<any> = [];

  private data: Array<any> = [];

  ngOnInit(): void {
    this.webApi.get('api/inventory/assets-top-warehouses').subscribe(
      (data:any) => {
        this.data = data;
        this.values = this.getChartData();
      }
    );
  }
  
  getChartData() : Array<Object> {
    let charData:any[] = [];
    let amounts:any[] = [];
    this.data.sort(function(a, b) {
      return b.amount - a.amount;
    });
    for (let i = 0; i < 5; i++){
      this.labels.push(this.data[i].id);
      let amount = this.data[i].amount;
      amounts.push(amount);
    }
    charData.push({data: amounts, label: 'Stock'});

    return charData;
  }
}
