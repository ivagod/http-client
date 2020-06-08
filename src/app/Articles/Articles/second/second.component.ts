import { Component, OnInit } from '@angular/core';
 
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, finalize, map, tap } from 'rxjs/operators';
import { Product } from '@shared/product';
import { NgxSpinnerService } from 'ngx-spinner';
import { BlogServiceService } from '@shared/blog-service.service';
import { SeoService } from '@shared/seo.service';
 
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public  data:  Product[];
  public  data1:  Product[];
  public  data2:  Product[];
  public  data3:  Product[];
  public  data4:  Product[];
  public  data5:  Product[];
    
   loading: boolean;
   constructor(private http: HttpClient,private blog: BlogServiceService,private seo:SeoService,
              private SpinnerService: NgxSpinnerService ) { }

  ngOnInit(): void {
    this.  http_get();
     this.http_get_01();
     this. http_get_02(); 
     this. http_get_03();
     this.http_get_04();
     this.http_get_05();
    // this.http_get_06();
    // this.http_get_07();
  }

   
  http_get() {  
    this.SpinnerService.show();  
    this.blog.http_get() 
    .subscribe((data:Product[]) => {
       this.data = data;
      this.SpinnerService.hide();
     });
  }
  http_get_01() {  
    this.SpinnerService.show();  
    this.blog.http_get_01() 
    .subscribe((data:Product[]) => {
       this.data1 = data;
      this.SpinnerService.hide();
     });
  }

  http_get_02() {  
    this.SpinnerService.show();  
    this.blog.http_get_02() 
    .subscribe((data:Product[]) => {
       this.data2 = data;
      this.SpinnerService.hide();
     });
  }
  http_get_03() {  
    this.SpinnerService.show();  
    this.blog.http_get_03() 
    .subscribe((data:Product[]) => {
       this.data3 = data;
      this.SpinnerService.hide();
     });
  }
   
  http_get_04() {  
    this.SpinnerService.show();  
    this.blog.http_get_04() 
    .subscribe((data:Product[]) => {
       this.data4 = data;
      this.SpinnerService.hide();
     });
  }
  http_get_05() {  
    this.SpinnerService.show();  
    this.blog.http_get_05() 
    .subscribe((data:Product[]) => {
       this.data5 = data;
      this.SpinnerService.hide();
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


