import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
    type: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/overview', title: 'Overview', class: '', type: 'overview' },
    { path: '/sales', title: 'Sales', class: '', type: 'sales' },
    { path: '/purchases', title: 'Purchases', class: '', type: 'purchases' },
    { path: '/financial', title: 'Financial', class: '', type: 'financial' },
    { path: '/inventory', title: 'Inventory', class: '', type: 'inventory' },
];

@Component({
  selector: 'app-shared-components',
  templateUrl: './shared-components.component.html',
  styleUrls: ['./shared-components.component.scss']
})
export class SharedComponentsComponent implements OnInit {

  menuItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
