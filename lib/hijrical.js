var hijrical = {};

hijrical.data = {
    monthNames: {
        // long month names
        long: [
            null,
            'Moharram al-Haraam',
            'Safar al-Muzaffar',
            'Rabi al-Awwal',
            'Rabi al-Aakhar',
            'Jumada al-Ula',
            'Jumada al-Ukhra',
            'Rajab al-Asab',
            'Shabaan al-Karim',
            'Ramadaan al-Moazzam',
            'Shawwal al-Mukarram',
            'Zilqadah al-Haraam',
            'Zilhaj al-Haraam'
        ],
        // short month names
        short: [
            null,
            'Moharram',
            'Safar',
            'Rabi I',
            'Rabi II',
            'Jumada I',
            'Jumada II',
            'Rajab',
            'Shabaan',
            'Ramadaan',
            'Shawwal',
            'Zilqadah',
            'Zilhaj'
        ]
    },

    // number of days in the year per month
    daysInYear: [30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355],

    // number of days in 30-years per year
    daysIn30Years: [
        354,  708, 1063, 1417, 1771, 2126, 2480, 2834,  3189,  3543,
       3898, 4252, 4606, 4961, 5315, 5669, 6024, 6378,  6732,  7087,
       7441, 7796, 8150, 8504, 8859, 9213, 9567, 9922, 10276, 10631
    ]
};

// Hijri date object 
hijrical.Date = function (day, month, year) {
    "use strict";
    this.day = day;
    this.month = month;
    this.year = year;

    // day of the year
    this.dayOfYear = function () {
        if (this.month == 1) {
            return this.day;
        }
        return hijrical.data.daysInYear[this.month - 2] + this.day;
    };

    // Astronomical Julian Day number associated with specified Hijri date
    this.ajd = function () {
        var y30 = Math.floor(this.year / 30.0),
            ajd = 1948083.5 + y30*10631 + this.dayOfYear();
        if (this.year % 30 != 0) {
            ajd += hijrical.data.daysIn30Years[this.year - y30*30 - 1];
        }
        return ajd;
    };
};

// is the specified year a Kabisa year?
hijrical.Date.isKabisa = function (year) {
    "use strict";
    var i, remainders = [2, 5, 8, 10, 13, 16, 19, 21, 24, 27, 29];
    for (i in remainders) {
        if (year % 30 == remainders[i]) {
            return true;
        }
    }
    return false;
};

// number of days in specified month and year
hijrical.Date.daysInMonth = function (month, year) {
    "use strict";
    if ((month == 12) && (hijrical.Date.isKabisa(year)) || (month % 2 == 1)) {
        return 30;
    }
    return 29;
};

// return new Hijri Date object associated with specified Astronomical Julian Day number
hijrical.Date.fromAJD = function (ajd) {
    "use strict";
    var year, month, day, i = 0,
        left = Math.floor(ajd - 1948083.5),
        y30 = Math.floor(left / 10631.0);

    left -= y30*10631;
    while (left > hijrical.data.daysIn30Years[i]) { i += 1; }

    year = Math.round(y30*30.0 + i);
    if (i > 0) { left -= hijrical.data.daysIn30Years[i - 1]; }

    i = 0;
    while (left > hijrical.data.daysInYear[i]) { i += 1; }

    month = Math.round(i + 1);
    if (i > 0) {
        day = Math.round(left - hijrical.data.daysInYear[i-1]);
    } else {
        day = Math.round(left);
    }

    return new hijrical.Date(day, month, year);
};
