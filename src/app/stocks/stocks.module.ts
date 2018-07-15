import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StocksComponent } from './stocks.component';
import { StockDetailComponent } from './stock-detail.component';
// import { MessagesComponent } from './messages/messages.component';
import { StocksRoutingModule } from './stocks-routing.module';

import { StockService } from './stock.service';

@NgModule({
    declarations: [
        StocksComponent,
        StockDetailComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        StocksRoutingModule
    ],
    providers: [
        StockService
    ],
})
export class StocksModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/