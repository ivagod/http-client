import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SeoService } from '@shared/seo.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  constructor(private meta: SeoService) {
    this.meta.updateTitle();
}
}
 
