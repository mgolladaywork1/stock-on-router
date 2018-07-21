import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockpickCenterHomeComponent } from './stockpick-center-home.component';
import { StockpickCenterComponent } from './stockpick-center.component';
import { StockCenterComponent } from './stock-center.component';
import { StockCenterDetailComponent } from './stock-center-detail.component';

const stockCenterRoutes: Routes = [
    {
        path: '',
        component: StockpickCenterComponent,
        children: [
            {
                path: '',
                component: StockCenterComponent,
                children: [
                    {
                        path: ':id',
                        component: StockCenterDetailComponent
                    },
                    {
                        path: '',
                        component: StockpickCenterHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(stockCenterRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StockCenterRoutingModule { }
