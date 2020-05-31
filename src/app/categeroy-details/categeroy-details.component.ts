import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-categeroy-details',
  templateUrl: './categeroy-details.component.html',
  styleUrls: ['./categeroy-details.component.css']
})
export class CategeroyDetailsComponent implements OnInit {

  public name : string;

  public  data: Observable<any>;
  loading = true;

  constructor(public activatedRoute: ActivatedRoute,private http: HttpClient){
    
  } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( res => {
      this.http
      .get<any>(`http://localhost:1337/categeroys?categorySlug=${res['name']}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
    });
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


 
