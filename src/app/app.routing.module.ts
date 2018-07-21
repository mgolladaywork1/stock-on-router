import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    {
        path: 'stock-center',
        loadChildren: 'app/stock-center/stock-center.module#StockCenterModule'
    },
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



