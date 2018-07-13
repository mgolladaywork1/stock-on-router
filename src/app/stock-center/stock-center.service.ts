import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class StockCenterService {
    static nextStockCenterId = 200;

    getPicklists() { }

    getPicklist(id: number | string) { }

    addPicklist(name: string) { }

    deletePicklist(id: number | string) { }
}


