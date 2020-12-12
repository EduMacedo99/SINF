import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { AuthenticationService } from 'src/app/account/authentication/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  private sidebarVisible: boolean;
  private modalVisible: boolean;
  public importForm = new FormGroup({
    filename: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private auth: AuthenticationService, private http: HttpClient) { 
    this.sidebarVisible = false;
    this.modalVisible = false;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  sidebarOpen() {
    const side_bar = document.getElementById('side-bar');
    const import_btn = document.getElementById('import-btn');
    const logout_btn = document.getElementById('logout-btn');
    if (side_bar != null) {
      side_bar.classList.remove('collapse');
    }
    if (import_btn != null) {
      import_btn.classList.remove('d-none');
      import_btn.classList.remove('d-lg-block');
    }
    if (logout_btn != null) {
      logout_btn.classList.remove('d-none');
      logout_btn.classList.remove('d-lg-block');
    }

    this.sidebarVisible = true;
  };
  sidebarClose() {
      const side_bar = document.getElementById('side-bar');
      const import_btn = document.getElementById('import-btn');
      const logout_btn = document.getElementById('logout-btn');
      if (side_bar != null) {
        side_bar.classList.add('collapse');
      }
      if (import_btn != null) {
        import_btn.classList.add('d-none');
        import_btn.classList.add('d-lg-block');
      }
      if (logout_btn != null) {
        logout_btn.classList.add('d-none');
        logout_btn.classList.add('d-lg-block');
      }

      this.sidebarVisible = false;
  };
  sidebarToggle() {
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };

  modalOpen() {
    const modal = document.getElementsByClassName('modal-dialog')[0];
    const main = document.getElementsByTagName('main')[0];
    if (modal != null) {
      modal.classList.remove('d-none');
    }
    if (main != null) {
      main.style.filter = "blur(4px)";
    }

    this.modalVisible = true;
  };
  modalClose() {
    const modal = document.getElementsByClassName('modal-dialog')[0];
    const main = document.getElementsByTagName('main')[0];
    if (modal != null) {
      modal.classList.add('d-none');
    }
    if (main != null) {
      main.style.filter = "blur(0px)";
    }

    this.modalVisible = false;
  };
  modalToggle() {
      if (this.modalVisible === false) {
          this.modalOpen();
      } else {
          this.modalClose();
      }
  };

  logout() {
    this.auth.logout();
  }

  sendFile() {
    const {filename} = this.importForm.value;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.put<any>(`http://localhost:3000/api/import?filename="${filename}"`,{},requestOptions)
        .subscribe();
  };
}
