import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout.component';
import {DragScrollModule} from "ngx-drag-scroll";
import { ImageCarouselComponent } from './parts/image-carousel/image-carousel.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    DragScrollModule
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
