import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
 
import { BlogServiceService } from '@shared/blog-service.service';
import { Product } from '@shared/product';

@Component({
  selector: 'app-categeroy-details',
  templateUrl: './categeroy-details.component.html',
  styleUrls: ['./categeroy-details.component.css']
})
export class CategeroyDetailsComponent implements OnInit {

  public name : string;

  public  data: Product[];
  public  data2: Product[];

  
 
  constructor(public activatedRoute: ActivatedRoute,private http: HttpClient,
               private blog:BlogServiceService){
    
  } 

  ngOnInit(): void {
    this.getdatails();
    this. http_get_02();
  }
 
  getdatails() {
    this.activatedRoute.params.subscribe( res => { 
      let name :string= res['name'];
     
      this.blog.getCategory(name)
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

}


 
