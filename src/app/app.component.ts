import { Component } from '@angular/core';
import { SeoService } from '@shared/seo.service'; ;
import { Product } from '@shared/product'; 
import{Router, NavigationEnd} from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})

export class AppComponent {
    private data :Product[];
    
    websiteName: string = "Latest News, Breaking News, National News, World News, India News  --nation18india";
    websiteDescription: string = " Read the Latest News On Business, Politics, Sports, Entertainment &amp; Much More From India And Around The World At  nation18india.";
    websiteImage: string = "http://res.cloudinary.com/nodebeats-v3/image/upload/v1523617702/nb2-v2.png";

    constructor(private seo: SeoService ,public router: Router ){
      this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
            gtag('config',  'UA-168732987-1', 
                  {
                    'page_path': event.urlAfterRedirects
                  }
                 );
         }
      }
   )
       this.setSeoTags();
    }
    setSeoTags() {
      this.seo.setTitle("Latest News, Breaking News, education , National News, World News, India News, Delhi university news & update ,Ignou news, cbse news , university news , 10 board update, 12 board update  --nation18india");
      this.seo.setSchemaData(this.websiteName, this.websiteDescription, this.websiteImage);
      this.seo.setMetaData(this.websiteName, "Website", this.websiteDescription, "www.nation18india.tech", this.websiteImage);
      this.seo.setTwitterCard(" nation18india", this.websiteName, this.websiteDescription, "nation18india", this.websiteImage);
  }

 

  }

 
