var year = parseInt(prompt("enter the year:"));
var isLeapYear = false;

var isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    var isDivisible100 = year % 100 == 0;
    if (isDivisibleBy100) {
        var isDivisible400 = year % 400 == 0;
        if (isDivisible400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    alert(year + "is the leap year");
} else {
    alert(year + "is not the leap year");
}