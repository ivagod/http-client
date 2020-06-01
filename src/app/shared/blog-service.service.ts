import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
   
  public API_URL = 'http://newsapi.org/v2/top-headlines?' +
                   'country=us&' +
                   'apiKey=aaa86f9381f24225923570f7e820c10b';

  constructor(private _http:HttpClient) { }

  getBlogDetail( ):Observable<Product[]> {
    // console.log("BlogDetail", API_URL)
    return this._http.get<Product[]>(this.API_URL)
        .pipe(
            catchError(this.handleError)
        );
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
