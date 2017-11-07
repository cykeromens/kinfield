import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AnonymousLayoutComponent} from './anonymous-layout/anonymous-layout.component';
import {UserLayoutComponent} from './user-layout/user-layout.component';
import {KinfieldCommonModule} from './common/common.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './layout.routing';
import {SiteModule} from '../site/site.module';

@NgModule({
  imports: [
    CommonModule,
    KinfieldCommonModule,
    RouterModule.forRoot(ROUTES),
    SiteModule,
  ],
  exports: [
    AdminLayoutComponent, AnonymousLayoutComponent, UserLayoutComponent, RouterModule
  ],
  declarations: [AdminLayoutComponent, AnonymousLayoutComponent, UserLayoutComponent]
})
export class LayoutsModule {
}
