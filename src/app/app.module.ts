import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { StocksModule } from './stocks/stocks.module';
import { PageNotFoundComponent } from './not-found.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockCenterComponent } from './stock-center/stock-center.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StockCenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StocksModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
