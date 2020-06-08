import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '@shared/blog-service.service';
import { Product } from '@shared/product';

@Component({
  selector: 'app-articl',
  templateUrl: './articl.component.html',
  styleUrls: ['./articl.component.scss']
})
export class ArticlComponent implements OnInit {
  public data :Product[];
  public data2:Product[];
  constructor(private blog:BlogServiceService) { }

  ngOnInit(): void {
     this.getarticles();
     this.http_get_02();
  }


  getarticles(){
       this.blog.http_get()
     .subscribe((data:Product[]) => {
         return  this.data = data;

       });
  
  }

  http_get_02() {  
    this.blog.http_get_02() 
   .subscribe((data:Product[]) => {
      return  this.data2 = data;
     });
 }

}
