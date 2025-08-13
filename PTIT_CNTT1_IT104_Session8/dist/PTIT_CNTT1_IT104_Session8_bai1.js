"use strict";
var weekDays;
(function (weekDays) {
    weekDays["MONDAY"] = "Monday";
    weekDays["TUESDAY"] = "tuesday";
    weekDays["WEDNESDAY"] = "wednesday";
    weekDays["THURSDAY"] = "thursday";
    weekDays["FRIDAY"] = "friday";
    weekDays["SATURDAY"] = "saturday";
    weekDays["SUNDAY"] = "sunday";
})(weekDays || (weekDays = {}));
Object.values(weekDays).forEach((e) => console.log(e.charAt(0).toUpperCase() + e.slice(1)));
