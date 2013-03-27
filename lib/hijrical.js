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
