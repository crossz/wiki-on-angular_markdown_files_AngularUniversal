import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MarkdownModule } from "ngx-markdown";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full',
               loadChildren: './blog/blog-view.module#BlogViewModule'},
      {path: 'post', 
               loadChildren: './post/blog-post-view.module#BlogPostViewModule'},
    ]),

    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ]
})
export class BlogModule { }