import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockCenterComponent } from './stock-center/stock-center.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StocksComponent,
    StockCenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
