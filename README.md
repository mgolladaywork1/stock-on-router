# StockOnRoute

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## This project use Angular router to navigate the features

Helpful references are:  
 https://angular.io/guide/router#the-sample-application  

Router is a complicated subject in Angular.  In 2016, we actually purchase the **'Router'** book from **Victor Savkin** to understand and study how it works and how the logics come together with the routing.

First we need to understand a few basic key items:

> \<base href> in index.html

> import router and configuration in app.module

> \<rounter-outlet> in the html

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

Let's start.
1. Add \<base href> to index.html after \<head>
2. Add RouterModule, Routes to AppModule
3. Create a component not-found.component.ts with only a simple template showing 'Page not found'
  



