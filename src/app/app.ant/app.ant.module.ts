import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzLayoutModule,
    NzGridModule
  ],
  exports:[
    NzPageHeaderModule,
    NzLayoutModule,
    NzGridModule
  ]
})
export class AppAntModule { }
