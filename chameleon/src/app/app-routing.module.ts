import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { SharedComponentsComponent } from './shared-components/shared-components.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SharedComponentsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'overview'
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
