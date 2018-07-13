import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockCenterComponent } from './stock-center/stock-center.component';

const appRoutes: Routes = [
  { path: 'stock-center', component: StockCenterComponent },
  { path: 'stocklist', component: StocksComponent },
  { path: '', redirectTo: '/stocklist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
