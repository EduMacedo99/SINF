import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/authGuard/auth.guard';
import { UnauthGuard } from './account/unauthGuard/unauth.guard';
import { OverviewComponent } from './overview/overview.component';
import { SharedComponentsComponent } from './shared-components/shared-components.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { FinancialComponent } from './financial/financial.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponentsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      },
      {
        path: 'purchases',
        component: PurchasesComponent
      },
      {
        path: 'financial',
        component: FinancialComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard],
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
