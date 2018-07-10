import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarsService {


  constructor(private http: HttpClient) { }

  /**
   * Get list of stars
   */
  getStars(): Observable<any> {
    return this.http.get(`${environment.api_url}people`)
      .pipe(map(
        (data) => {
          return data;
        }
      ),
      catchError((err) => {
        return throwError('Error occured');
      }
    ));
  }
}
