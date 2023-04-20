import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashGamesComponent } from './pages/cash-games/cash-games.component';
import { SpringSeriesComponent } from './pages/spring-series/spring-series.component';
import { FinalStageComponent } from './pages/final-stage/final-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    CashGamesComponent,
    SpringSeriesComponent,
    FinalStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
