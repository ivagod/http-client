import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, switchMap, tap, map } from 'rxjs/operators';
import { SeoService } from '@shared/seo.service';
import { Product } from '@shared/product'; 
import { Title, Meta } from '@angular/platform-browser';
import { BlogServiceService } from '@shared/blog-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit   {

  websiteName: string;
  websiteDescription: string;
  websiteImage: string;

  public data : Product[];
  private data2 : Product[];

  
    constructor(public activatedRoute: ActivatedRoute, 
      private titleService: Title,
      private metaTagService: Meta,

      private blog:BlogServiceService,
     private seo :SeoService
    ,private http: HttpClient
     ){
      this.setSeoTags();
     
    } 
 
   ngOnInit(): void {
    this. getdatails();
    this.http_get_02();

  }

   getdatails() {
    this.activatedRoute.params.subscribe( res => { 
      const title :string= res['title'];
      this.titleService.setTitle(title);
      
    this.blog.getdetails(title)
     .subscribe((data :Product[]) => {
      return  this.data = data;
      });
  })
  }
  http_get_02() {  
     this.blog.http_get_02() 
    .subscribe((data:Product[]) => {
       return  this.data2 = data;
      });
  }

 

  setSeoTags(){
 
  //  this.seo.setTitle(this.data.);
    this.seo.setSchemaData(this.websiteName, this.websiteDescription, this.websiteImage);
    this.seo.setMetaData(this.websiteName, "Website", this.websiteDescription, "www.nodebeats.com", this.websiteImage);
    this.seo.setTwitterCard("nodebeats", this.websiteName, this.websiteDescription, "nodebeats", this.websiteImage);
}



 
 
}









// ngOnInit() {
//   this.route.data
//     .pipe(
//       map(data => data['products']),
//       tap(products => this.metaData(products)),
//     )
//     .subscribe(res => this.products = res);
// }

// metaData(products: Product[]) {
//   this.ui.setMetaData({
//     title: 'Products',
//     description: `Check out our collection of ${products.length} products`
//   });
// }
// }




 
    // this.activatedRoute.data.pipe(
    //   switchMap((data) => this.activatedRoute.paramMap.pipe(
    //      switchMap((params) => this.http.get<any>( ` https://infinite-mountain-30260.herokuapp.com/articles?title=${params.get('title')}`)
    // .pipe(
    //      tap((product: Product) => {
    //       const title = ` ${product.title}`;
    //        this.seo.setTitle(this.title);
    //        this.seo.setSchemaData(  this.websiteName,  this.websiteDescription,);
    //        console.log(this.title);
    //      //  this.metaService.updateTag({ name: 'description', content: product.description});
    //     }),)
         
    //   )))    
    //   )}