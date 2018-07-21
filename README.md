# StockOnRoute

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## This project use Angular router to navigate the features

Helpful references are:  
 https://angular.io/guide/router#the-sample-application  

Router is a complicated subject in Angular.  In 2016, we actually purchase the **'Router'** book from **Victor Savkin** to understand and study how it works and how the logics come together with the routing.

First we need to understand a few basic key items:

> \<base href> in index.html

> import router and configuration in app.module

> \<router-outlet> in the html

> routerLink 

> Router state

> Activated route

> Router events

These have been well defined in the Angular documentation on Router.  So we won't listed them here.  Please learn and be familiar with them, then we can apply.

Our project will have  
- A Stock Center: with a list of stock-groups
- A Stock List: the list of stock in the selected stock-groups
- A Search
- A Detail Stock
- A Pop Note
- We can add, update, or delete an item in Stock-list or in Stock-Center


## The first session is almost like milestone 1 in Angular Doc.  I created a simple routing application with 2 routes, default redirect route, and a page-not-found 

Let's start.

1. Add \<base href> to index.html after \<head>
2. Add RouterModule, Routes to AppModule
3. Create a component not-found.component.ts with only a simple template showing 'Page not found'
4. Create a stocks component for listing stocks

    $ ng generate component stocks.component.ts
  
5. Create a stock center component for picklist

    $ ng generate component stock-center.component.ts

6. Add very simple display to the StocksComponent and StockCenterComponent's template.  Such as:  
\<p>Here is the Stock List\</p>

7. Create 2 router-link in AppComponent's template:  
```
<nav>
  <a routerLink="/stock-center" outerLinkActive="active">Stock Center</a>
  <a routerLink="/stocklist" routerLinkActive="active">Stocks</a>
</nav>
<router-outlet></router-outlet>
```

8. Run the app:  
   $ ng serve

9. Open Chrome, localhost:4200  
 We should be able to click each button and see that it route to each component.

 (hint: use F12 in the browser)


## This section is almost like milestone 2 in Angular Doc.  I created the AppRoutingModule for a more complex application ahead.

In this session, I created the simple AppRoutingModule.  It took the router part in AppModule that was created in milestone 1; and after removing the router codes in AppModule, import AppRoutingModule to AppModule.  When running the application, features and output should still be similar as of milestone 1.

```
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockCenterComponent } from './stock-center/stock-center.component';
import { StocksComponent } from './stocks/stocks.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: 'stock-center', component: StockCenterComponent },
    { path: 'stocklist', component: StocksComponent },
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
```
Now, the 3rd session.  I applied the technique like milestone 3 in Angular Doc.  3 major tasks accomplished here:

- Organize the app and rounters into feature areas.  Such as 'Stocks', 'Stock-Center'
- Navigate imperatively from one component to another.  (We have been used declaratively).  
- Pass required and optional information through route parameters.  

#  Apply Separation of Concerns principle

Below is a set of rules from Angular Doc.  
```
- Each feature area resides in its own folder  
- Each feature has its own Angular feature module  
- Each area has its own area root component  
- Each area root component has its own router outlet and chile route  
- Each area route rarely (if ever) cross with
routes of other features  
```

# Apply Guard to control user's navigation or authorization.

```
- CanActivate: to mediate navigation to a route
- CanActivateChild: to mediate navigation to a child route
- CanDeactivate: to mediate navigation away from the current route
- Resolve: to perform route data retrieval before route activation
- CanLoad: to mediate navigation to a feature module loaded asynchronously
```
```
- CanDeactivate and CanActivateChild guards first, from the deepest child route to the top  
- Then CanActivate guards from the top down to the deepest child route  
- If the module is loaded asynchronously, the CanLoad guard is checked.
- If any guard return false, pending guards are canceled, and the entire navigation is canceled.  
```

