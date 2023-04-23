import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout.component';
import {DragScrollModule} from "ngx-drag-scroll";
import { ImageCarouselComponent } from './parts/image-carousel/image-carousel.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    MainLayoutComponent,
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    DragScrollModule,
    HttpClientModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
