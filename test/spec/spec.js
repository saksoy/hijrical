"use strict";

describe("Hijrical utility functions", function () {
    it("should be a Julian day on 4th October 1582.", function () {
        var x = moment([1582, 10, 4]);
        expect(hijrical.utils.isJulian(x)).toBeTruthy();
    });

    it("should not be a Julian day on 5th October 1582.", function () {
        var x = moment([1582, 10, 5]);
        expect(hijrical.utils.isJulian(x)).toBeFalsy();
    });

    it("should be AJD 2455645.5 on 25th March 2011.", function () {
        var x = moment([2011, 3, 25]);
        expect(hijrical.utils.gregorianToAJD(x)).toBe(2455645.5);
    });

    it("should be 25th March 2011 on AJD 2455645.5.", function () {
        var expected = moment([2011, 3, 25]),
            observed = hijrical.utils.ajdToGregorian(2455645.5);
        expect(observed.date()).toBe(expected.date());
        expect(observed.month()).toBe(expected.month());
        expect(observed.year()).toBe(expected.year());
        expect(observed.hours()).toBe(expected.hours());
        expect(observed.minutes()).toBe(expected.minutes());
        expect(observed.seconds()).toBe(expected.seconds());
        expect(observed.milliseconds()).toBe(expected.milliseconds());
    });
});

describe("Hijrical date", function () {
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

    it("should be 25th March 2011 on 20th Rabi al-Aakhar 1432H.", function () {
        var expected = moment([2011, 3, 25]),
            observed = (new hijrical.Date(20, 4, 1432)).gregorian();
        expect(observed.date()).toBe(expected.date());
        expect(observed.month()).toBe(expected.month());
        expect(observed.year()).toBe(expected.year());
        expect(observed.hours()).toBe(expected.hours());
        expect(observed.minutes()).toBe(expected.minutes());
        expect(observed.seconds()).toBe(expected.seconds());
        expect(observed.milliseconds()).toBe(expected.milliseconds());
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
        var expected = new hijrical.Date(20, 4, 1432),
            observed = hijrical.Date.fromAJD(2455645.5);
        expect(observed.day).toBe(expected.day);
        expect(observed.month).toBe(expected.month);
        expect(observed.year).toBe(expected.year);
    });

    it("should be 20th Rabi al-Aakhar 1432H on 25th March 2011.", function () {
        var expected = new hijrical.Date(20, 4, 1432),
            observed = hijrical.Date.gregorianToHijri(moment([2011, 3, 25]));
        expect(observed.day).toBe(expected.day);
        expect(observed.month).toBe(expected.month);
        expect(observed.year).toBe(expected.year);
    });
});
