import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Stock } from '../model/stock';
import { StockService } from './stock.service';

@Component({
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks$: Observable<Stock[]>;

  private selectedId: number;

  constructor(
    private service: StockService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.stocks$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getWatchStocks();
      })
    );
  }

}
