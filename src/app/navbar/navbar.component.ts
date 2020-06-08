import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
 

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/categeroy/tech', name: 'mock', icon: 'info_outline' },
  { link: '/async', name: 'async-http', icon: 'swap_vert' },
  { link: '/back', name: 'back-http', icon: 'swap_vert' },
  { link: '/static/back', name: 'static-back-http', icon: 'swap_vert' },
  { link: '/nonexistent', name: 'nonexistent', icon: 'error' }
];



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent {

  public links: any[] = [];
  sidenavWidth = 4;
  ngStyle: string;
 
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map((link) => {
      link.name = `${link.name}`;
      return link;
    });

  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

}
