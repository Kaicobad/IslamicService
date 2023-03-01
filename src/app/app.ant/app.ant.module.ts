import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzLayoutModule
  ],
  exports:[
    NzPageHeaderModule,
    NzLayoutModule
  ]
})
export class AppAntModule { }
