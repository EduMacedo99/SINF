import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaftApiService {

  constructor(private http: HttpClient) {}

  /**
   * GET request to the saf-T Api
   */
  get(endpoint: string) : Observable<Object> {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(
      `${environment.safTApi}/${endpoint}`,requestOptions
    );
  }
}
