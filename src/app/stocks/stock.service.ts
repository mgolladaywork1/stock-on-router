import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { WATCHSTOCK } from '../model/mock-stock';

@Injectable()
export class StockService {
    getWatchStocks() { return of(WATCHSTOCK); }

    getStock(id: number | string) {
        return this.getWatchStocks().pipe(
            map(stocks => stocks.find(stock => stock.id === +id))
        );
    }
}
