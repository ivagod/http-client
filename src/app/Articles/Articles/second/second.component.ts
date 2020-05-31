import { Component, OnInit } from '@angular/core';
 
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, finalize, map, tap } from 'rxjs/operators';
import { Product } from '@shared/product';
import { SeoService } from '@shared/seo.service';
 
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  //public  products: Observable<any>;

  public products:  Observable<Product>;

  url = 'https://infinite-mountain-30260.herokuapp.com/articles?&_limit=1';
  loading: boolean = true;

  constructor(private http: HttpClient ,private seo:SeoService) { }

  ngOnInit(): void {
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


