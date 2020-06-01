import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SeoService } from '@shared/seo.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit,OnChanges {
  public title : string;

  public  data: Observable<any>;
   loading = true;

  constructor(public activatedRoute: ActivatedRoute,private http: HttpClient,private seo: SeoService){
 
    this.seo.updateTitle();
  }
   //  get(
  //  `http://localhost:1337/articles?slug=${this.title} `,
 //    http://localhost:1337/articles?title= 
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( res => { 
      console.log(res['title']);
      this.http
      .get<any>(`http://localhost:1337/articles?title=${res['title']}`)
      .pipe(
        retry(4),
         catchError(this.handleError)
      )
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
    });
     // this.title = res['title'];  
  }
ngOnChanges() : void{
  

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
