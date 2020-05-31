# Angular RU Universal Starter
[![Angular-RU](https://img.shields.io/badge/Telegram_chat:-Angular_RU-216bc1.svg?style=flat)](https://t.me/angular_ru) [![Angular-RU Universal](https://img.shields.io/badge/Telegram_chat:-Angular_RU_Universal-14b102.svg?style=flat)](https://t.me/angular_universal_ru) [![Angular-RO](https://img.shields.io/badge/Telegram_chat:-Angular_RO-14b102.svg?style=flat)](https://t.me/angular_ro) [![JS-RO](https://img.shields.io/badge/Telegram:-JS_RO-14b102.svg?style=flat)](https://t.me/js_ro) [![Build Status](https://semaphoreci.com/api/v1/angularru/angular-universal-starter/branches/master/badge.svg)](https://semaphoreci.com/angularru/angular-universal-starter)

> Repozitoriul Angular CLI și Angular Universal

**Traduceri**:
- [Rusă](./README-RU.md)
- [Engleză](./README.md)
- [Română](./README-RO.md)

**Resurse**:
- chat public rusesc https://t.me/angular_universal_ru
- chat public Angular românesc https://t.me/angular_ro
- https://ssr.angular.su/ - rendering pe server master
- https://csr.angular.su/ - rendering pe client master

# Planuri: 
- [x] Angular 7
- [x] `document is not defined` și `window is not defined` - [aici](./defined.md)
- [x] [Angular Material2](https://material.angular.io/) **UI componente** - [branch aparte](https://github.com/Angular-RU/angular-universal-starter/tree/material2)
- [x] [Primeng](https://www.primefaces.org/primeng/) **UI компоненты** - [branch aparte](https://github.com/Angular-RU/angular-universal-starter/tree/primeng)
- [x] importăm modulele în dependență de platformă (`MockServerBrowserModule`)
- [x] comunicăm cu api pe server `TransferHttp`
- [x] folosim Cookies pe server `UniversalStorage`
- [x] folosim **[ngx-meta](https://github.com/fulls1z3/ngx-meta)** pentru SEO (*title, meta tags, and Open Graph tags for social sharing*).
- [x] folosim ngx-translate pentru i18n
- [x] folosim ORIGIN_URL - pentru drumuri absolute
- [x] @angular/service-worker(`ng add @angular/pwa --project universal-demo`)

## Cum să pornim?
- `yarn` sau `npm install`
- `yarn start` sau `npm run start` - pentru rendering pe client
- `yarn ssr` sau `npm run ssr` -  pentru rendering pe server
- `yarn build:universal` sau `npm run build:universal` - pentru production
- `yarn server` sau `npm run server` - pentru a porni serverul
- `yarn build:prerender` sau `npm run build:prerender` - pentru a genera statica pe `static.paths.ts`
- pentru a porni regimul watch, în ssr folosiți `npm run ssr:watch`

## Cum să folosesc repozitoriul în proiectul meu?
Pentru a adăuga ssr în proiectul dumneavoastră e nevoie de următoarele fișiere:
 - .angular-cli.json
 - server.ts
 - prerender.ts
 - webpack.config.js
 - main.server.ts
 - main.browser.ts
 - shared/*
 - forStorage/*
 - environments/*
 - app.browser.module.ts
 - app.server.module.ts

## Linkuri
Exemplu oficial în engleză: https://github.com/angular/universal-starter 
Module folosite pentru universal:
- https://github.com/angular/universal/tree/master/modules/aspnetcore-engine - motorul pentru .net core
- https://github.com/angular/universal/tree/master/modules/common - TransferHttpCacheModule
- https://github.com/angular/universal/tree/master/modules/express-engine - Express Engine pentru a porni renderingul pe node, folosim în repozitoriul nostru. Fiți atenți, versiunea acutală nu mai mică de 5.0.0-beta.5
- https://github.com/angular/universal/tree/master/modules/hapi-engine -  Hapi Engine un motor alternativă. În exemplu nu folosim, în principui nu-i mare diferența în conectare față de express-engine
- https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader - modul pentru LazyLoading - e ceva folositor. Fiți atenți, versiunea actuală nu mai mică de 5.0.0-beta.5

## Caracteristici (Important)
- modulul pentru TransferHttp  folosește `import { TransferState } from '@angular/platform-browser';` și e nevoie de el pentru a realiza interogările la rest api pe server și pentru a evita dublarea interogărilor (pe client). Uitați-vă la `home.component.ts` (așteptați 3 secunde)

```ts
this.http.get('https://reqres.in/api/users?delay=3').subscribe(result => {
    this.result = result;
});
```
- `export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });` -  ca pagina să nu clipească!

- pentru a lucra cu cookie e scris `AppStorage`,  care cu ajutorul DI ne permite să facem realizare pentru server și browser. Uitați-vă la `server.storage.ts` și `browser.storage.ts` pentru a vedea realizările. În `server.ts`  este 
```ts
providers: [
    {
        provide: REQUEST, useValue: (req)
    },
    {
        provide: RESPONSE, useValue: (res)
    }
]
```
pentru a lucra cu REQUEST și RESPONSE prin DI -  asta-i necesar pentru a lucra cu UniversalStorage când folosim cookies.

- webpack.config.js  e scris doar ca să strângă fișierul server.ts și server.js, pentru că angular-cli are o [eroare](https://github.com/angular/angular-cli/issues/7200) la 3d dependențele.
- pentru a rezolva o mare parte din probleme se folosește următorul cod `server.ts`

Rezolvarea problemei cu variabilele globale, inclusiv `document is not defined` și `window is not defined`
```ts
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();
const win = domino.createWindow(template);
const files = fs.readdirSync(`${process.cwd()}/dist-server`);
const styleFiles = files.filter(file => file.startsWith('styles'));
const hashStyle = styleFiles[0].split('.')[1];
const style = fs.readFileSync(path.join(__dirname, '.', 'dist-server', `styles.${hashStyle}.bundle.css`)).toString();

global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  },
});
global['document'] = win.document;
global['CSS'] = style;
// global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
global['Prism'] = null;

```

```ts
global['navigator'] = req['headers']['user-agent'];
```
asta ne permite să excludem o parte din problemele apărute cu `undefined`.

















      <div class="col-sm-6" >
      <a class="oflow-hidden pos-relative mb-20 dplay-block" href="#" *ngFor="let item of second | async">
      <div class="wh-100x abs-tlr"><img [src]='sanitizer.bypassSecurityTrustUrl(item.img)'  alt=""></div>
      <div class="ml-120 min-h-100x">
      <h5><b> <a [routerLink]="['/Articles', item.title]" ><b>  {{item.title}} </b></a></b></h5>
      <h6 class="color-lite-black pt-10">by <span class="color-black"><b>{{item.author}},</b></span> {{item.datetime }}</h6>
      </div>
      </a>
    
      </div>
      </div>
      <h4 class="p-title mt-30"><b> <a [routerLink]="['/Category', 'Technology']" > news</a>   </b></h4>
      <div class="row" >
      <div class="col-sm-6" *ngFor="let item of third | async">
      <img  [src]='sanitizer.bypassSecurityTrustUrl(item.img)'   alt="">
      <h4 class="pt-20"><a [routerLink]="['/Articles', item.title]"><b> {{item.title}}</b></a></h4>
      <ul class="list-li-mr-20 pt-10 mb-30">
      <li class="color-lite-black">by <a href="#" class="color-black"><b> {{item.author}},</b></a>
            {{item.datetime }}</li>
       <li><i class="color-primary mr-5 font-12 ion-chatbubbles"></i>47</li>
      </ul>
      </div>
       </div>
       <h4 class="p-title mt-30"> <b> <a [routerLink]="['/Category', 'Technology']" > Recent news</a> </b></h4>
      <div class="row" >
      <div class="col-sm-6" *ngFor="let item of forth | async">
      <img  [src]='sanitizer.bypassSecurityTrustUrl(item.img)'   alt="">
      <h4 class="pt-20"><a [routerLink]="['/Articles', item.title]"><b> {{item.title}}</b></a></h4>
      <ul class="list-li-mr-20 pt-10 mb-30">
      <li class="color-lite-black">by <a href="#" class="color-black"><b> {{item.author}},</b></a>
            {{item.datetime }}</li>
       <li><i class="color-primary mr-5 font-12 ion-chatbubbles"></i>47</li>
      </ul>
      </div>
       </div>
       <h4 class="p-title mt-30"> <b> <a [routerLink]="['/Category', 'Technology']" > Recent news </a></b></h4>
       <div class="row" >
       <div class="col-sm-6" *ngFor="let item of five | async">
       <img  [src]='sanitizer.bypassSecurityTrustUrl(item.img)'   alt="">
       <h4 class="pt-20"><a [routerLink]="['/Articles', item.title]"><b> {{item.title}}</b></a></h4>
       <ul class="list-li-mr-20 pt-10 mb-30">
       <li class="color-lite-black">by <a href="#" class="color-black"><b> {{item.author}},</b></a>
             {{item.datetime }}</li>
        <li><i class="color-primary mr-5 font-12 ion-chatbubbles"></i>47</li>
       </ul>
       </div>
        </div>
        <h4 class="p-title mt-30"><b> <a [routerLink]="['/Category', 'Technology']" >Recent news </a> </b></h4>
       <div class="row" >
       <div class="col-sm-6" *ngFor="let item of six | async">
       <img  [src]='sanitizer.bypassSecurityTrustUrl(item.img)'   alt="">
       <h4 class="pt-20"><a [routerLink]="['/Articles', item.title]"><b> {{item.title}}</b></a></h4>
       <ul class="list-li-mr-20 pt-10 mb-30">
       <li class="color-lite-black">by <a href="#" class="color-black"><b> {{item.author}},</b></a>
             {{item.datetime }}</li>
        <li><i class="color-primary mr-5 font-12 ion-chatbubbles"></i>47</li>
       </ul>
       </div>
        </div>
     
      <a class="dplay-block btn-brdr-primary mt-20 mb-md-50"  [routerLink]="['/Category', 'Technology']"><b>VIEW MORE</b></a>
      </div>
      <div class="d-none d-md-block d-lg-none col-md-3"></div>
      <div class="col-md-6 col-lg-4">
      <div class="pl-20 pl-md-0">
      <ul class="list-block list-li-ptb-15 list-btm-border-white bg-primary text-center">
      <li><b>1 BTC = $13,2323</b></li>
      <li><b>1 BCH = $13,2323</b></li>
      <li><b>1 ETH = $13,2323</b></li>
      <li><b>1 LTC = $13,2323</b></li>
      <li><b>1 DAS = $13,2323</b></li>
      <li><b>1 BCC = $13,2323</b></li>
      </ul>
      <div class="mtb-50   " >
      <h4 class="p-title" ><b>POPULAR POSTS</b></h4>
      <a class="oflow-hidden pos-relative mb-20 dplay-block" href="#" *ngFor="let it of third | async">
      <div class="wh-100x abs-tlr"><img [src]='sanitizer.bypassSecurityTrustUrl(it.img)'  alt=""></div>
      <div class="ml-120 min-h-100x">
      <h5><b> {{it.title}}</b></h5>
      <h6 class="color-lite-black pt-10">by <span class="color-black"><b>{{it.author}},</b></span>   {{it.datetime }}</h6>
      </div>
      </a>
      </div>
       
      <div class="mtb-50 mb-md-0">
      <h4 class="p-title"><b>NEWSLETTER</b></h4>
      <p class="mb-20">Subscribe to our newsletter to get notification about new updates,
      information, discount, etc..</p>
      <form class="nwsltr-primary-1">
      <input type="text" placeholder="Your email">
      <button type="submit"><i class="ion-ios-paperplane"></i></button>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>


 