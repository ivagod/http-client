import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 
 import { AppRoutingModule } from './app-routing.module';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { FooterComponent } from './footer/footer.component';

import { ArticlesModule } from './Articles/articles.module';
import { CategoryModule } from './Category/category.module';
import { DetailsComponent } from './details/details.component';
import { CategeroyDetailsComponent } from './categeroy-details/categeroy-details.component';
    
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
 
  
 @NgModule({
  declarations: [
    AppComponent,
   
    FooterComponent,
    DetailsComponent,
    CategeroyDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
 
    FlexLayoutModule.withConfig({ssrObserveBreakpoints: ['xs', 'lt-md']}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
     
    HttpClientModule,  
     ArticlesModule,
     CategoryModule,
  ],
  providers: [   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
