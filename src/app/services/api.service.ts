import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) {}

  getData(path: string, name: string): Observable <any> {
    return this.http.get(`${environment.apiUrl}${path}/${name}`)
    .pipe(
      map(response => response as any[]),
      // catchError(e => throwError(new Error('SOMETHING BAD HAPPENED')))
    )
  }

}
