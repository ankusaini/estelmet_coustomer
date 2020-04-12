import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpBackend } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  baseUrl='http://13.233.151.89:8020';

  constructor(private http: HttpClient,
    private httpBackend: HttpBackend,
    private jwtService: JwtService) { }

    private formatErrors(error: any) {
      return  throwError(error.error);
    }
  
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(this.baseUrl+`${path}`, { params })
        .pipe(catchError(this.formatErrors));
    }
  
    put(path: string, body: Object = {}): Observable<any> {
      return this.http.put(
        this.baseUrl+`${path}`,
        JSON.stringify(body)
      ).pipe(catchError(this.formatErrors));
    }
  
    post(path: string, body: Object = {}, params?: HttpParams): Observable<any> {
      return this.http.post(
        this.baseUrl+ `${path}`,
        JSON.stringify(body), { params }
      ).pipe(catchError(this.formatErrors));
    }
  
    delete(path): Observable<any> {
      return this.http.delete(
        this.baseUrl+`${path}`
      ).pipe(catchError(this.formatErrors));
    }

    putUserWithMedia(path,body)
  {
    const HttpUploadOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      }),
    }
    this.http= new HttpClient(this.httpBackend);
    return this.http.put(path,body,HttpUploadOptions).pipe(catchError(this.formatErrors));

  }

  postLogin(path: string, body: object = {}): Observable<any> {

    return this.http.post(
      this.baseUrl+`${path}`,
      JSON.stringify(body), { observe: 'response' }
    ).pipe(catchError(this.formatErrors));
  }
}
