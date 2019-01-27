import { DashboardItem } from './../../models/dashboardItem.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class DashboardProvider {

  constructor(private http: HttpClient) {
    console.log('Hello DashboardProvider Service');
  }

  private dashboardUrl = 'api/dashboardItems';  // URL to web api

  getDashboardItems(): Observable<DashboardItem[]> {
    //this.messageService.add('HeroService: fetched heroes');
    return this.http.get<DashboardItem[]>(this.dashboardUrl).pipe(catchError(this.handleError('getDashboardItems', [])));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
