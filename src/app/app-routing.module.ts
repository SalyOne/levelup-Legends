import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {CashGamesComponent} from "./main-layout/components/cash-games/cash-games.component";

const routes: Routes = [
  {

    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'cash-games',
        pathMatch: 'full'
      },
      {
        path: 'cash-games',
        component: CashGamesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
