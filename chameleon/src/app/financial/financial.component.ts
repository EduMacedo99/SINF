import { Component, OnInit } from '@angular/core';
import { SaftApiService } from 'src/app/saftApi/saft-api.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss', '../app.component.scss']
})
export class FinancialComponent implements OnInit {

  constructor(private saftApi: SaftApiService) { }

  ngOnInit(): void {
    this.saftApi.get('api/financial/balance-sheet').subscribe(
      (data:Object) => {
        if('assets' in data) console.log(data['assets'])
      }
    );
  }

}
