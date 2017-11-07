import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {TopnavbarComponent} from './topnavbar/topnavbar.component';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    TopnavbarComponent,
    FooterComponent
  ],
  declarations: [NavigationComponent, TopnavbarComponent, FooterComponent]
})
export class KinfieldCommonModule {
}
