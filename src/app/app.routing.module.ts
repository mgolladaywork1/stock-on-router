import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockCenterComponent } from './stock-center/stock-center.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'stock-center', component: StockCenterComponent },
    { path: '', redirectTo: '/stocklist', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }



