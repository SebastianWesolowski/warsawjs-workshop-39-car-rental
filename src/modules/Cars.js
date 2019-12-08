'use strict';

const Money = require('../types/Money');
const DateRange = require('../types/DateRange');
// const listProice = require('../');
class Cars {
    constructor({ db }) {
        this._db = this;
    }

    // get a offer for car
    // @param {string} carId
    // @param {dataRange} date

    async getOffer(carID, dataRange) {
        const db = this._db;
        const car = await db('cars')
            .first()
            .where({ car_id: carID });
        if (!car) {
            return Promise.reject(new Error('No entry found for car: ' + carID));
        }
        const { price, days } = listPrice(
            new Money({ amount: car.list_price_amount, currency: car.list_price_currency }),
            // new DateRange({ start: DateRange.start, end: DateRange.end }))
            dataRange
        );

        return { price, days, car };
    }

}


module.exports = Cars
