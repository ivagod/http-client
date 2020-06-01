import { Component, OnInit } from '@angular/core';
 
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, finalize, map, tap } from 'rxjs/operators';
 
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public  products: Observable<any>;
  public  second: Observable<any>;
  public  third: Observable<any>;
  public  forth: Observable<any>;
  public  five: Observable<any>;
  public  six: Observable<any>;
  public  seven: Observable<any>;
  
  url = 'https://infinite-mountain-30260.herokuapp.com/articles?&_limit=1';
  loading: boolean = true;

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.http_get_01();
    this. http_get_02(); 
    this. http_get_03();
    this.http_get_04();
    this.http_get_05();
    this.http_get_06();
    this.http_get_07();
  }

  http_get_01(){
    this.loading = true;
    this.http.get<any[]>(this.url)
    .pipe(  
        map(data => data['products']),
           retry(3),
          finalize(() => this.loading = false),   
          catchError(this.handleError)
    ).subscribe((res) => {
     return  this.products = res;
     });
    }

     
    http_get_02() {
      this.loading = true;
      this.http.get<any>('https://infinite-mountain-30260.herokuapp.com/articles?&_limit=5')
      .pipe(
        retry(3),
        finalize(() => this.loading = false),
        catchError(this.handleError)
      ).subscribe((res) => {
        this.second = res;
       });}

      http_get_03() {
        this.loading = true;
        this.http.get<any>('https://infinite-mountain-30260.herokuapp.com/articles?&_limit=4')
        .pipe(
          retry(7),
          finalize(() => this.loading = false),
          catchError(this.handleError)
        ).subscribe((res) => {
          this.third = res;
         });}
        http_get_04() {
          this.loading = true;
          this.http.get<any>('https://infinite-mountain-30260.herokuapp.com/articles?&_limit=4')
          .pipe(
            retry(3),
            finalize(() => this.loading = false),
            catchError(this.handleError)
          ).subscribe((res) => {
            this.second = res;
           });}
          http_get_05() {
            this.loading = true;
            this.http.get<any>('https://infinite-mountain-30260.herokuapp.com/articles?&_limit=4')
            .pipe(
              retry(3),
              finalize(() => this.loading = false),
              catchError(this.handleError)
            ).subscribe((res) => {
              this.second = res;
             });}
            http_get_06() {
              this.loading = true;
              this.http.get<any>('https://infinite-mountain-30260.herokuapp.com/articles?&_limit=4')
              .pipe(
                retry(3),
                finalize(() => this.loading = false),
                catchError(this.handleError)
              ).subscribe((res) => {
                this.second = res;
               });}
                http_get_07() {
                  this.loading = true;
                  this.http.get<any>('https://infinite-mountain-30260.herokuapp.com/articles?&_limit=4')
                  .pipe(
                    retry(3),
                    finalize(() => this.loading = false),
                    catchError(this.handleError)
                  ).subscribe((res) => {
                    this.second = res;
                   });}

                   
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


