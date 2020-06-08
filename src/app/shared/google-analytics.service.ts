 
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
 import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor(private router: Router) {

  
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        })
      ),
    { dispatch: false }
    
      }
 }
