import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
 
   constructor(private http:HttpClient){}


getCategory(name: string): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/categories?name=`+name, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
         retry(2),
         catchError(this.handleError),
      )
}

getdetails(title: string): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?title=`+ title, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
         retry(4),
         catchError(this.handleError),
      )
}

 getarticles(): Observable<Product[]>{
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?&_limit=65`, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
           catchError(this.handleError),
      )

 }

   http_get(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://68.183.89.15/articles?&_limit=1`, 
       ).pipe(
           map((data:Product[]) => {
             return data;
           }),
            catchError(this.handleError),
        )
}
http_get_01(): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?&_limit=3`, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
          catchError(this.handleError),
      )
} 
 http_get_02(): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?&_limit=4`, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
          catchError(this.handleError),
      )
} 
 http_get_03(): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?&_limit=4`, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
         retry(2),
         catchError(this.handleError),
      )
}
http_get_04(): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?&_limit=4`, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
         retry(3),
         catchError(this.handleError),
      )
}
http_get_05(): Observable<Product[]> {
  return this.http.get<Product[]>(
    `http://68.183.89.15/articles?&_limit=4`, 
     ).pipe(
         map((data:Product[]) => {
           return data;
         }),
         retry(4),
         catchError(this.handleError),
      )
}




private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

 

}
