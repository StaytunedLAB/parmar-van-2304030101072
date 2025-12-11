function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year.`);
    } else {
        console.log(`${year} is NOT a Leap Year.`);
    }
}

console.log("Leap Year Check Results:");
checkLeapYear(2020); // Leap Year
checkLeapYear(1900); // Not a Leap Year 
checkLeapYear(2000); // Leap Year
checkLeapYear(2023); // Not a Leap Year
module.exports = checkLeapYear; 