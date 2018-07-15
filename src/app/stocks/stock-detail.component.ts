import { Component, OnInit, HostBinding } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Stock } from '../model/stock';
import { StockService } from './stock.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
    selector: 'app-stock-detail',
    templateUrl: './stock-detail.component.html'
})
export class StockDetailComponent implements OnInit {

    stock$: Observable<Stock>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: StockService
    ) { }

    ngOnInit() {
        this.stock$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getStock(params.get('id')))
        );
    }

    gotoStocks(stock: Stock) {
        const stockId = stock ? stock.id : null;
        this.router.navigate(['/stock', { id: stockId, foo: 'foo' }]);
    }
}
