import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  baseUrl = '127.0.0.1';

  get(url: string, params?: object, options?: object ) {
    url = this.baseUrl + url;
    return this.http.get<any>(url, options).pipe(
      catchError(err => throwError(err))
    );
  }

  post(url: string, body: object, options?: object) {
    url = this.baseUrl + url;
    body = body || {};
    return this.http.post(url, body, options).pipe(
      catchError(err => throwError(err))
    );
  }

}
