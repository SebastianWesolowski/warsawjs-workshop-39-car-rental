'use strict'

const Money = require('./src/types/Money.js');
const DateRange = require('./src/types/DateRange.js');
const price = new Money({ amount: 25, currency: 'PLN' });
const time = new Money({ start: getTime(), end: getTime() });
// console.log('before', price);
// price.amount = 30;
console.log('after', time);