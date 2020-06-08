constructor() {
    this.categoryId = "";
    this.blogDescription = "";
    this.status = "active";
    this.active = false;
}
_id:string;
blogTitle:string;
urlSlog:string;
categoryId:string;
blogSummary:string;
blogDescription:string;
tags:any;
bannerImage:string;
bannerImageTitle:string;
bannerImageAltText:string;
imageProperties:ImageProperties;
author:string;
seoEntry:BlogMetaTagModel;
 
}

getBlogDetail(id:string):Observable < BlogModel > {
    // console.log("BlogDetail", API_URL)
    return this._http.get<BlogModel>(API_URL + this.blogApiRoute + "/" + id)
        .pipe(
            catchError(this.handleError)
        );
}


blogTagsList: any[] = [];  
blogDetail: BlogModel;

  ngOnInit() {
 if(!this.blogTagsList)
      this.getBlogTags();
    if(!this.blogDetail)
      this.getBlogDetail();
  }
 
 getBlogDetail() {
    this.blogService.getBlogDetail(this.blogId)
      .subscribe(res => {
        this.blogDetail = res;
        this.blogDetail.bannerImage = this.getImgSrc(this.blogDetail.bannerImage);
        console.log("Banner Image", this.blogDetail.bannerImage);
        this.state.set(BLOG_KEY, this.blogDetail as BlogModel);
        this.setSeoTags();
      });
  }

  setSeoTags() {
    if(this.blogDetail) {
      this.seo.setTitle("Blog | " + this.blogDetail.blogSummary);
      this.seo.setSchemaData(this.blogDetail.blogTitle, this.blogDetail.blogSummary, this.blogDetail.bannerImage);
      this.seo.setMetaData(this.blogDetail.blogTitle, "Blog", this.blogDetail.blogSummary, "www.nodebeats.com", this.blogDetail.bannerImage);
      this.seo.setTwitterCard("nodebeats", this.blogDetail.blogTitle, this.blogDetail.blogSummary, "nodebeats", this.blogDetail.bannerImage);
    }
  }
}



getBlogList(perPage:number, currentPage:number, categoryId?:string):Observable < BlogResponse > {
    let query = new HttpParams();
    query = query.append('perpage', perPage.toString());
    query = query.append('page', currentPage.toString());
    if(categoryId)
        query = query.append('categoryid', categoryId.toString());
    return this._http.get<BlogResponse>(API_URL + this.blogApiRoute, {params: query})
        .pipe(
            catchError(this.handleError)
        );
}
