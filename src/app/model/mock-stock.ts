import { Stock } from './stock';
import { Pick } from './pick';

export const WATCHSTOCK: Array<Stock> = [
    { id: 1, symbol: 'INTC', name: 'Intel', description: 'Intel Corporation', price: 51.86 },
    { id: 2, symbol: 'CSCO', name: 'CSCO', description: 'Cisco Systems', price: 42.86 },
    { id: 3, symbol: 'MSFT', name: 'Microsoft', description: 'Microsoft Corporation', price: 102.12 },
    { id: 4, symbol: 'AAPL', name: 'Apple', description: 'Apple Inc.', price: 190.35 }
];

export const ENERGYSTOCK: Array<Stock> = [
    { id: 11, symbol: 'XOM', name: 'Exxon', description: 'Exxon Mobil Corporation', price: 83.66 },
    { id: 12, symbol: 'CVX', name: 'Chevron', description: 'Chevron Corporation', price: 127.59 },
    { id: 13, symbol: 'VNOM', name: 'Viper', description: 'Viper Energy Partners LP', price: 34.33 },
    { id: 14, symbol: 'PE', name: 'Parsley', description: 'Parsley Energy, Inc. Class A', price: 32.87 }
];

export const FANGSTOCK: Array<Stock> = [
    { id: 21, symbol: 'GOOG', name: 'Google', description: 'Alphabet Inc.', price: 1152.84 },
    { id: 22, symbol: 'FB', name: 'Facebook', description: 'Facebook Inc.', price: 203.54 },
    { id: 23, symbol: 'AMZN', name: 'Amazon', description: 'Amazon.com, Inc.', price: 1743.07 },
    { id: 24, symbol: 'NFLX', name: 'Netflix', description: 'Netflix, Inc', price: 415.63 }
];

export const PICKLIST: Array<Pick> = [
    { id: 1, name: 'Watch Stock' },
    { id: 2, name: 'Energy Stock' },
    { id: 3, name: 'FANG Stock' }
];

