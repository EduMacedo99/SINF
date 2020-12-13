import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './account/login/login.component';
import { SharedComponentsComponent } from './shared-components/shared-components.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { FinancialComponent } from './financial/financial.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { SalesLineChartComponent } from './sales/sales-line-chart/sales-line-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LoginComponent,
    SharedComponentsComponent,
    SalesComponent,
    PurchasesComponent,
    FinancialComponent,
    InventoryComponent,
    BarChartComponent,
    SalesLineChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
