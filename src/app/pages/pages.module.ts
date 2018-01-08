import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementarComponent } from '../components/incrementar/incrementar.component';
import { AccountSettingdComponent } from './account-settingd/account-settingd.component';



@NgModule({
  declarations: [DashboardComponent, ProgessComponent, Graficas1Component,
    PagesComponent, IncrementarComponent, GraficoDonaComponent, AccountSettingdComponent],
  imports: [ SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
  exports: [DashboardComponent, ProgessComponent, Graficas1Component, PagesComponent],
  providers: []
})
export class PagesModule {}
