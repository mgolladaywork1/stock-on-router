import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StockCenterService } from './stock-center.service';
import { Pick } from '../model/pick';
import { PICKLIST } from '../model/mock-stock';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-stock-center',
  templateUrl: './stock-center.component.html',
  styleUrls: ['./stock-center.component.css']
})
export class StockCenterComponent implements OnInit {
  stockpick$: Observable<Pick[]>;
  selectedId: number;

  constructor(
    private service: StockCenterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.stockpick$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getPicklists();
      })
    )
  }

}
