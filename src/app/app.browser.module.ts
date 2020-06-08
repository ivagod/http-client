// angular
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
// libs
import { REQUEST } from '@nguniversal/express-engine/tokens';
// shared
 // components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServiceWorkerModule } from '@angular/service-worker';
 import { StateTransferInitializerModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { ServiceWorkerModule } from '@angular/service-worker';

// the Request object only lives on the server
export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [AppComponent,  ],
  imports: [
    AppModule,
    StateTransferInitializerModule,
    BrowserTransferStateModule,
 
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false }),
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST,
      useFactory: getRequest,
    },
    { provide: 'ORIGIN_URL', useValue: location.origin },
  ],
})
export class AppBrowserModule {}
