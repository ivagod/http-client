import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { FirstComponent } from './Articles/first/first.component';
import { SecondComponent } from './Articles/second/second.component';  

@NgModule({
  declarations: [ArticlesComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  providers: [
     
  ],
   
})
export class ArticlesModule { }
