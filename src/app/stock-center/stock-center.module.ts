import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StockCenterDetailComponent } from './stock-center-detail.component';
import { StockCenterComponent } from './stock-center.component';
import { StockpickCenterHomeComponent } from './stockpick-center-home.component';
import { StockpickCenterComponent } from './stockpick-center.component';
import { StockCenterRoutingModule } from './stock-center-routing.module';
import { StockCenterService } from './stock-center.service';


@NgModule({
    imports: [
        FormsModule, CommonModule, StockCenterRoutingModule
    ],
    declarations: [
        StockCenterComponent,
        StockCenterDetailComponent,
        StockpickCenterHomeComponent,
        StockpickCenterComponent,
    ],
    providers: [
        StockCenterService
    ]
})
export class StockCenterModule { }
