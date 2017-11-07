import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AboutComponent, ContactComponent, BlogComponent]
})
export class SiteModule {
}
