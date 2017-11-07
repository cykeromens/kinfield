import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule],
  declarations: []
})
export class SharedModule {
}
