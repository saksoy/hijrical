"use strict";

describe("Hijrical date", function () {
    beforeEach(function () {
    });

    it("should be the 10th day of the year on 10th Moharram 1432H.", function () {
        var x = new hijrical.Date(10, 1, 1432);
        expect(x.dayOfYear()).toBe(10);
    });

    it("should be the 246th day of the year on 10th Ramazaan 1432H.", function () {
        var x = new hijrical.Date(10, 9, 1432);
        expect(x.dayOfYear()).toBe(246);
    });

    it("should be AJD 2455645.5 on 20th Rabi al-Aakhar 1432H.", function () {
        var x = new hijrical.Date(20, 4, 1432);
        expect(x.ajd()).toBe(2455645.5);
    });

    it("should not be a Kabisa year in 1432H.", function () {
        expect(hijrical.Date.isKabisa(1432)).toBeFalsy();
    });

    it("should be a Kabisa year in 1434H.", function () {
        expect(hijrical.Date.isKabisa(1434)).toBeTruthy();
    });

    it("should have 30 days in Ramazaan 1432H.", function () {
        expect(hijrical.Date.daysInMonth(9, 1432)).toBe(30);
    });

    it("should have 29 days in Zilhaj 1432H.", function () {
        expect(hijrical.Date.daysInMonth(12, 1432)).toBe(29);
    });

    it("should have 30 days in Zilhaj 1434H.", function () {
        expect(hijrical.Date.daysInMonth(12, 1434)).toBe(30);
    });

    it("should be 20th Rabi al-Aakhar 1432H on AJD 2455645.5.", function () {
        var x = new hijrical.Date(20, 4, 1432),
            y = hijrical.Date.fromAJD(2455645.5);
        expect(x.day).toBe(y.day);
        expect(x.month).toBe(y.month);
        expect(x.year).toBe(y.year);
    });
});
