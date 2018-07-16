import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { PICKLIST } from '../model/mock-stock';
import { Pick } from '../model/pick';

const PICKS: Pick[] = PICKLIST;

@Injectable()
export class StockCenterService {
    static nextStockCenterId = 200;

    constructor(public id: number, public name: string) { }

    getPicklists() { return of(PICKLIST); }

    getPicklist(id: number | string) {
        return this.getPicklists().pipe(
            map(picks => picks.find(pick => pick.id === +id))
        );
    }

    addPicklist(name: string) { }

    deletePicklist(id: number | string) { }
}


