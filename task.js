var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(id, name, sal) {
        this.EmployeeID = id;
        this.EmployeeName = name;
        this.BasicSalary = sal;
        this.HRA = this.BasicSalary * 0.20;
        this.DA = this.BasicSalary * 0.10;
        this.GrossSalary = this.HRA + this.DA + this.BasicSalary;
    }
    EmployeeSalary.prototype.displayDetails = function () {
        console.log("".concat(this.EmployeeID, ",").concat(this.EmployeeName, ",").concat(this.BasicSalary, ",").concat(this.BasicSalary, ",").concat(this.HRA, ",\n            ").concat(this.DA, ",").concat(this.GrossSalary));
    };
    return EmployeeSalary;
}());
var emp = new EmployeeSalary(4719, "Abinesh", 20000);
emp.displayDetails();
