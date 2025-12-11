let now = new Date();
alert(now); // current date and time

let Jan01_1970 = new Date(0);
alert(Jan01_1970); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

let Dec02_1970 = new Date(-24 * 3600 * 1000);
alert(Dec02_1970); // Wed Dec 31 1969 05:30:00 GMT+0530 (India Standard Time)

// current date
let date = new Date();
// the hour in your current time zone
alert(date.getHours());

// the hour in UTC+0 time zone (London time without daylight savings)
alert(date.getUTCHours());
// current date
let dat = new Date();

// the hour in your current time zone
alert(dat.getHours());

// the hour in UTC+0 time zone (London time without daylight savings)
alert(dat.getUTCHours());

// Setting date components
let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

let dates = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert(dates); // 1 Mar 2016

// Date to number, date diff
let date1 = new Date();
alert(+date1);


// Date.parse from a string;
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)