import { Component } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-sales-line-chart',
  templateUrl: './sales-line-chart.component.html',
  styleUrls: ['./sales-line-chart.component.scss'],
})
export class SalesLineChartComponent {

  constructor(private saftApi: SaftApiService) { }

  private sales: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200];

  ngOnInit(): void {
    this.saftApi.get('api/sales/monthly-cumulative-sales').subscribe(
      (data:Object) => {
        if('sales' in data) {
          this.sales = data['sales'];
        }
      }
    );
  }
  
  getChartData() : Array<Object> {
    let charData = [
      { data: this.sales, label: 'Monthly Sales' },
      { data: this.sales, label: 'Cumulative Sales' }
    ];
    return charData;
  }
}