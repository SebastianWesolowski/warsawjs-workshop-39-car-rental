
// pattern Value Object
'use strict';

class ValueObject {
    constructor(data) {
        Object.assign(this, data);
        Object.freeze(this);
    }
}

module.exports = ValueObject;


//const money = new ValueObject({ammount:10, currency: 'PLN'});
// money.ammount = 12;
