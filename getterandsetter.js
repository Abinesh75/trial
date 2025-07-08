var User = /** @class */ (function () {
    function User() {
        this.userId = "admin@gmail.com";
        this.password = "admin@123";
    }
    Object.defineProperty(User.prototype, "_userId", {
        get: function () {
            return this.userId;
        },
        set: function (val) {
            this.userId = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_password", {
        get: function () {
            return this.password;
        },
        set: function (val) {
            this.password = val;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.userDetails = function () {
        return " UserId:".concat(this.userId, " Password:").concat(this.password);
    };
    return User;
}());
var user = new User();
console.log(user._userId);
user._userId = "abinesh@gmail.com";
console.log(user._userId);
console.log(user._password);
user._password = "abinesh@123";
console.log(user._password);
