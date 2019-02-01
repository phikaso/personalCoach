import { Todo } from './../../models/todo.interface';
import { DashboardItem } from '../../models/dashboardItem.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodosProvider {

  constructor(private http: HttpClient) {
    console.log('Hello TodosProvider Provider');
  }

  private todoUrlOld = 'api/todos';  // URL to web api
  private baseUrl = 'http://localhost/personalCoachBackend'; ///getTodos.php';
  todos: Todo[];

  getTodos(): Observable<Todo[]> {
    //this.messageService.add('HeroService: fetched heroes');
    // return this.http.get(this.todoUrl).then(function(response){
    //   console.log(response);
    // })
    return this.http.get<Todo[]>(this.baseUrl + '/getTodos.php').pipe(catchError(this.handleError('getTodos', [])));
  }

  get_todos(){
    this.http.get(this.baseUrl + '/getTodos.php').subscribe((res)=>{
        console.log(res);
    });
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
