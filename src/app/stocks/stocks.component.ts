import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Stock } from '../model/stock';
import { StockService } from './stock.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks$: Observable<Stock[]>;

  private selectedId: number;

  constructor(
    // private service: StockService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
