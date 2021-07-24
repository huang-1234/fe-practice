var passcode = "Hello TypeScript";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () { return this._fisrtName; },
        set: function (newFirstName) {
            this._fisrtName = newFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "Hello TypeScript") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getLastName = function () {
        return this._lastName;
    };
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}
