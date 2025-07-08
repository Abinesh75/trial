var Employee = /** @class */ (function () {
    function Employee(id, name, number) {
        //data member of a class
        this.empid = 4719;
        this.empname = "Abinesh";
        this.empnumber = 30000;
        this.empid = id;
        this.empname = name;
        this.empnumber = number;
    }
    //memeber function of a class
    Employee.prototype.employeeDetails = function () {
        return "Id:".concat(this.empid, " Name:").concat(this.empname, " Salary:").concat(this.empnumber);
    };
    return Employee;
}());
//creating object of a class
var details = new Employee(4720, "Abinesh", 31000);
console.log(details.empid);
console.log(details.employeeDetails());
var det = new Employee(4722, "Hari", 31000);
console.log(det.empid);
console.log(det.employeeDetails());
