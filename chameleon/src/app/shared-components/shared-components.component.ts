import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpErrorResponse } from '@angular/common/http'
import { AuthenticationService } from 'src/app/account/authentication/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UploadService } from '../upload.service';

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
  styleUrls: ['./shared-components.component.scss'],
})
export class SharedComponentsComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url: 'http://localhost:3000/api/import',
      headers: {
        "Access-Control-Allow-Methods": "POST",
        'Access-Control-Allow-Origin': '*',
      },
      responseType: 'blob',
    },
    theme: 'dragNDrop',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
    },
  };

  menuItems: any[] = [];
  private sidebarVisible: boolean;
  private modalVisible: boolean;
  public importForm = new FormGroup({
    filename: new FormControl('', [Validators.required]),
  });

  @ViewChild("fileUpload", { static: false }) fileUpload?: ElementRef; files = [];
  constructor(private auth: AuthenticationService, private http: HttpClient, private uploadService: UploadService) {
    this.sidebarVisible = false;
    this.modalVisible = false;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
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
  }
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
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  modalOpen() {
    const modal = document.getElementsByClassName('modal-dialog')[0];
    const main = document.getElementsByTagName('main')[0];
    if (modal != null) {
      modal.classList.remove('d-none');
    }
    if (main != null) {
      main.style.filter = 'blur(4px)';
    }

    this.modalVisible = true;
  }
  modalClose() {
    const modal = document.getElementsByClassName('modal-dialog')[0];
    const main = document.getElementsByTagName('main')[0];
    if (modal != null) {
      modal.classList.add('d-none');
    }
    if (main != null) {
      main.style.filter = 'blur(0px)';
    }

    this.modalVisible = false;
  }
  modalToggle() {
    if (this.modalVisible === false) {
      this.modalOpen();
    } else {
      this.modalClose();
    }
  }

  logout() {
    this.auth.logout();
  }

  sendFile() {
    const { filename } = this.importForm.value;
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http
      .put<any>(
        `http://localhost:3000/api/import?filename="${filename}"`,
        {},
        requestOptions
      )
      .subscribe();
  }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total === undefined)
              throw new Error("'event.total' is undefined");
            file.progress = Math.round(event.loaded * 100 / event.total);
            return 0;
          case HttpEventType.Response:
            return event;
          default:
            return -1;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`Upload failed: ${file.data.name}`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

  onClick() {
    if (this.fileUpload === undefined)
      throw new Error("'fileUpload' is undefined");
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      this.uploadFile(fileUpload.files[0]);
    };
    fileUpload.click();
  }
}
