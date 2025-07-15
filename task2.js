var student = /** @class */ (function () {
    function student() {
    }
    Object.defineProperty(student.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_roll", {
        get: function () {
            return this.roll;
        },
        set: function (val) {
            this.roll = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_mark1", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_mark2", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "_mark3", {
        get: function () {
            return this.mark1;
        },
        set: function (val) {
            this.mark1 = val;
        },
        enumerable: false,
        configurable: true
    });
    student.prototype.userDetails = function () {
        return "total, average, and grade are ".concat(this.mark1 + this._mark2 + this._mark3, "  ").concat(this.mark1 + this._mark2 + this._mark3 / 3, "  ");
    };
    return student;
}());
var stuobj = new student();
stuobj.name = "sai";
stuobj._roll = 1;
stuobj._mark1 = 22;
stuobj.mark2 = 11;
stuobj.mark3 = 22;
console.log(stuobj.userDetails());
