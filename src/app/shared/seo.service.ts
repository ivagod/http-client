 
   import { Injectable } from '@angular/core';
  import { Title } from '@angular/platform-browser';
  import { Meta } from '@angular/platform-browser';
  import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
  
  @Injectable()
  
  export class SeoService{
    constructor(
      private titleService: Title,
      private meta: Meta,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  updateMetaInfo(content, author, category) {
      this.meta.updateTag({ name: 'description', content: content });
      this.meta.updateTag({ name: 'author', content: author });
      this.meta.updateTag({ name: 'keywords', content: category });
  }

  updateTitle(title?: string) {
      if (!title) {
          this.router.events
              .pipe(
                  filter((event) => event instanceof NavigationEnd),
                  map(() => this.activatedRoute),
                  map((route) => {
                      while (route.firstChild) { route = route.firstChild; }
                      return route;
                  }),
                  filter((route) => route.outlet === 'primary'),
                  mergeMap((route) => route.data)).subscribe((event) => {
                      this.titleService.setTitle(event['title'] + ' | Site name');
                  });
      } else {
          this.titleService.setTitle(title + ' | Site name');
      }
  }
  };