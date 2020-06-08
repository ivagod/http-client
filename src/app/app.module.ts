import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

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
 import { DetailsComponent } from './details/details.component';
import { CategeroyDetailsComponent } from './categeroy-details/categeroy-details.component';
    
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { SeoService } from '@shared/seo.service';
import { BlogServiceService } from '@shared/blog-service.service';
  
import { NgxSpinnerModule } from 'ngx-spinner';
import { UrlSerializer } from '@angular/router';
import { CustomUrlSerializer } from './shared/custom-url-serializer';
import { GoogleAnalyticsService } from '@shared/google-analytics.service';


import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
   
 @NgModule({
  declarations: [
    AppComponent,
   
    FooterComponent,
    DetailsComponent,
    CategeroyDetailsComponent,
    NavbarComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule.withConfig({ssrObserveBreakpoints: ['xs', 'lt-md']}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
     
    HttpClientModule,  
    NgxSpinnerModule  ,

     ArticlesModule,
 
     ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],

  providers: [ SeoService ,BlogServiceService, GoogleAnalyticsService,
     { provide: UrlSerializer, useClass: CustomUrlSerializer },

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
