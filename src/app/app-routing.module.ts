import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {CashGamesComponent} from "./main-layout/components/cash-games/cash-games.component";
import {FinalStageComponent} from "./main-layout/components/final-stage/final-stage.component";
import {SpringSeriesComponent} from "./main-layout/components/spring-series/spring-series.component";

const routes: Routes = [
  {

    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'spring-series',
        pathMatch: 'full'
      },
      {
        path: 'cash-games',
        component: CashGamesComponent
      },
      {
        path: 'final-stage',
        component: FinalStageComponent
      },
      {
        path: 'spring-series',
        component: SpringSeriesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
