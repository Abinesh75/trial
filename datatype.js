console.log("Hey its time to learn typescript");
//union
var info = "changepond";
console.log(info);
//any
var dataany = "change";
console.log(dataany);
//enum
var days;
(function (days) {
    days[days["sun"] = 10] = "sun";
    days[days["mon"] = 11] = "mon";
    days[days["tue"] = 12] = "tue";
    days[days["wed"] = 13] = "wed";
    days[days["thus"] = 14] = "thus";
    days[days["fri"] = 15] = "fri";
    days[days["sat"] = 16] = "sat";
})(days || (days = {}));
;
var data = days.sat;
console.log(data);
//tuple
var item = ["sam", 90, "kite"];
console.log(item);
//array
var rollno = [45, 34, 232, 534];
var courses = ["sam", "jim", "log"];
var breakf = [78, 34, 5342, 5345, 324];
var fastf = ["noodles", "pasta", "chips"];
console.log(courses, rollno);
console.log(breakf, fastf);
