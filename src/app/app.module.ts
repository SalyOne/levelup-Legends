import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashGamesComponent } from './main-layout/components/cash-games/cash-games.component';
import { SpringSeriesComponent } from './main-layout/components/spring-series/spring-series.component';
import { FinalStageComponent } from './main-layout/components/final-stage/final-stage.component';
import {MainLayoutModule} from "./main-layout/main-layout.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
