import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { DetailsComponent } from './details/details.component';
import { CategeroyDetailsComponent } from './categeroy-details/categeroy-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  
  {path:'articles/:title',component:DetailsComponent},
  {path:'categeroys/:name',component: CategeroyDetailsComponent},

  { path: 'article', loadChildren: () => import(`./Articles/articles.module`).then(m => m.ArticlesModule) 
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
