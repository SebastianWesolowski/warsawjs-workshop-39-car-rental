
'use strict';
const ValueObject = require('./ValueObject');

class DateRange extends ValueObject {
    /**
    * create new dateRange
    * @parem {Object} params
    * @parem {Date|string} params start
    * @parem {Date|string} params end
    */

    constructor({ start, end }) {
        start = new Date(start);
        end = new Date(end);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            throw new TypeError('start or end is invaild');
        }
        super({ start, end });
    }
}

module.exports = DateRange;