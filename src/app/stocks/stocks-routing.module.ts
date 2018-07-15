import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { StockDetailComponent } from './stock-detail.component';
import { StocksComponent } from './stocks.component';

const stockRoute: Routes = [
    { path: 'stocklist', component: StocksComponent },
    { path: 'stock/:id', component: StockDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(stockRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class StocksRoutingModule { }

