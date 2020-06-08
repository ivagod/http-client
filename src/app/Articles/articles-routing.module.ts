import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ArticlComponent } from './articl/articl.component';
 
const routes: Routes = [

  {
    path: '',
    component: ArticlesComponent
  },

  {
    path: 'viewmore',
    component:  ArticlComponent
  },
  
  
 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
