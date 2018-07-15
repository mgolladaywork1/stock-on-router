import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stock } from '../model/stock';
import { WATCHSTOCK } from '../model/mock-stock';

const STOCKS: Stock[] = WATCHSTOCK;

@Injectable()
export class StockService {
    getWatchStocks() { return of(STOCKS); }

    getStock(id: number | string) {
        return this.getWatchStocks().pipe(
            map(stocks => stocks.find(stock => stock.id === +id))
        );
    }
}
