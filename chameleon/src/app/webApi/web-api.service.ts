import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/account/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  /**
   * GET request to the api
   */
  get(endpoint: string): Observable<Object> {
    return this.http.get(`${environment.safTApi}/${endpoint}`, {
      headers: new HttpHeaders({
        Authorization: this.getToken(),
      }),
    });
  }

  /**
   * POST request t the api
   */
  post(endpoint: string, body: any): Observable<Object> {
    return this.http.post(`${environment.safTApi}/${endpoint}`, body, {
      headers: new HttpHeaders({
        Authorization: this.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }

  /**
   * Fetch the Authentication Token from the api and save it
   */
  fetchToken(): Observable<Object> {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(`${environment.safTApi}/token?username="${this.auth.getUsername()}"&password="${this.auth.getPassword()}"`, requestOptions).pipe(
      retry(2),
      tap((response: any) => {
        let token = JSON.parse(response).access_token;
        this.setToken(token);
      })
    );
  }

  /**
   * Methods to handle Primavera Token
   */

  private getToken(): string {
    let token = localStorage.getItem('token');
    if (token != null) return token;
    return '';
  }

  private setToken(value: string): void {
    localStorage.setItem('token', `Bearer ${value}`);
  }
}
