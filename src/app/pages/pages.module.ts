import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [DashboardComponent, ProgessComponent, Graficas1Component,
    PagesComponent],
  imports: [ SharedModule, PAGES_ROUTES],
  exports: [DashboardComponent, ProgessComponent, Graficas1Component, PagesComponent],
  providers: []
})
export class PagesModule {}
