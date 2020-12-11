import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private username: string = "";

  private password: string = "";

  private authenticated: boolean = localStorage.getItem('token') !== null;

  constructor(private router: Router) { }

  setCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  checkCredentials(credentialAction: Observable<Object>): boolean {
    credentialAction.subscribe(
      (res) => {
        console.log(res)
        if (res)
          return true;
        return false;
      }
    );
    return false;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  /**
   * Need to pass login action as a parameter because of circular dependency injections
   */
  login(loginAction: Observable<Object>) {
    loginAction.subscribe(
      () => {
        this.authenticated = true;
        this.router.navigateByUrl('');
      }
    );
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
}
