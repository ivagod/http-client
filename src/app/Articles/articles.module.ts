import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { FirstComponent } from './Articles/first/first.component';
import { SecondComponent } from './Articles/second/second.component';
import { ArticlComponent } from './articl/articl.component';  
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

@NgModule({
  declarations: [ArticlesComponent, FirstComponent, SecondComponent, ArticlComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ShareButtonsModule

  ],
  providers: [
     
  ],
   
})
export class ArticlesModule { }
